import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  //console.log(session)
  if (req.method == 'POST') {
    req.body = JSON.parse(req.body)
    //console.log(req.body)
    const data = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    }
    console.log(data)
    const db = (await connectDB).db('forum')
    const result = await db.collection('comment').insertOne(data)
    res.status(200).json('저장완료')
  }
}