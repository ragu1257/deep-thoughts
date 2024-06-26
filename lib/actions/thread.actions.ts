"use server";

import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function createThread({
  text,
  author,
  communityId,
}: {
  text: string;
  author: string;
  communityId: string | null;
}): Promise<void> {
  connectToDB();
  try {
    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    });
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}

export async function fetchPosts() {
  connectToDB();
  try {
    const allThreads = Thread.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: "desc" })
      .populate({ path: "author", model: User });
    return allThreads;
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}

export async function fetchPostsById(userId: string) {
  connectToDB();
  try {
    const allThreads = await User.findOne({ id: userId })
    .select("threads")
      .populate({ path: "threads", model: Thread, select: "text createdAt" })
    return allThreads;
  }
  catch (err) {
    console.log("Error connecting to DB", err);
  }
}

export async function deleteThread(threadId: any, userId: any) {
  connectToDB();
  try {    
    await Thread.findByIdAndDelete(threadId).exec();
    await User.findByIdAndUpdate(userId, {
      $pull: { threads: threadId },
    }).exec();
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}

export async function updateIsLiked(threadId: any, isLikedClicked: boolean) {
  connectToDB();
  try {
    await Thread.findByIdAndUpdate(
      threadId,
      { $set: { isLiked: isLikedClicked } }
    );
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}

