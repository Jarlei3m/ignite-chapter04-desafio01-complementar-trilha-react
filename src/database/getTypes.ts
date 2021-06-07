import connectToDatabase from "../utils/mongodb";

export async function getTypes() {
  const { db } = await connectToDatabase();

  const data = await db.collection("types").find().toArray();

  return data;
}

export default getTypes;
