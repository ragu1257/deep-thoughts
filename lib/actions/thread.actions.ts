"use server"

import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function createThread({text, author, communityId}: {text: string, author: string, communityId: string | null}): Promise<void> {
  connectToDB()
  try{
    const createdThread = await Thread.create({
      text,
      author,
      community: null
    })
    await User.findByIdAndUpdate(author, {$push: {threads: createdThread._id}})
  }
  catch(err){
    console.log('Error connecting to DB', err);
  }
}