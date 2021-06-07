import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import upload from "../../../utils/upload";
import connectToDatabase from "../../../utils/mongodb";
import { ObjectId } from "mongodb";

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single("image"))
  .post(async (req, res) => {
    const {
      slug,
      name,
      text,
      description,
      total_country,
      total_language,
      total_city,
      cities: [],
    } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection("continents");

    await collection.insertOne({
      slug,
      name,
      text,
      // image: req.file.location,
      description,
      total_country,
      total_language,
      total_city,
      cities: [{}],
    });

    return res.status(200).json({ ok: true });
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
