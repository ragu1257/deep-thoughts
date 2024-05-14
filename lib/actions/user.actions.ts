"use server"

import Thread from "../models/thread.model"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

export async function updateUser(
  {userId, username, name, email , createdAtUser}: {userId: string, username: string, name: string, email: string, createdAtUser: any}
): Promise<void> {
  connectToDB()
  
  try{
    if (email) {
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          email,
          onboarded: true,
          createdAtUser,
        },
        { upsert: true }
      );
    } else {
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          onboarded: true,
          createdAtUser,
        },
        { upsert: true }
      );
    }
    
  }
  catch(err){
    console.log('Error connecting to DB', err);
  }

  
}

export async function fetchUser(userId: string): Promise<any> {
  connectToDB()
  try{
    const user = await User.findOne({id: userId
    })
    return user
  }
  catch(err){
    console.log('Error connecting to DB', err);
  }
}

export async function getAllUsers(): Promise<any> {
  connectToDB()
  try{
    const allUsers = await User.find().select('name username threads createdAtUser')
    return allUsers
  }
  catch(err){
    console.log('Error connecting to DB', err);
  }
}

export async function fetchPosts(userId: string) {
  connectToDB();
  try {
    const allThreads = await User.findOne({ id: userId })
      .populate({ path: "threads", model: Thread, select: "text" })
    ;
    return allThreads;
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}