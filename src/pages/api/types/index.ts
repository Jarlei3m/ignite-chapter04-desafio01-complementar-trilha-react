import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import upload from "../../../utils/upload";
import connectToDatabase from "../../../utils/mongodb";

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single("image"))
  .post(async (req, res) => {
    const { text } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection("types");

    await collection.insertOne({
      text,
      // image: req.file.location,
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
