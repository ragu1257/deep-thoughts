"use server"

import User from "../models/user.model"
import { connectToDB } from "../mongoose"

export async function updateUser(
  {userId, username, name, email, phoneNumber}: {userId: string, username: string, name: string, email: string, phoneNumber: string}
): Promise<void> {
  connectToDB()
  try{
    await User.findOneAndUpdate(
      {id: userId},
      {username: username.toLowerCase(),
        name,
        email,
        onboarded: true,
        phoneNumber
      },
      {upsert: true}
    )
  }
  catch(err){
    console.log('Error connecting to DB', err);
  }

  
}