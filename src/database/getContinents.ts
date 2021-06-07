import connectToDatabase from "../utils/mongodb";

export async function getContinents() {
  const { db } = await connectToDatabase();

  const data = await db.collection("continents").find().toArray();

  return data;
}

export default getContinents;
