"use client"
import { createThread } from "@/lib/actions/thread.actions"
import { useState } from "react"

export default function PostThreads({ userInfoID, userInfoName }: Readonly<{ userInfoID: any, userInfoName: String }>) {
    const [textareas, setTextareas] = useState("")
    const handleSubmit = async (e: any) => {
      e.preventDefault()
      await createThread({
        text: textareas,
        author: userInfoID,
        communityId: null
      })
      
    }
  return (
    <>
    <h1 className="head-text">Post threads for {userInfoName} {userInfoID}</h1>
    <form className="flex flex-col justify-start gap-10" onSubmit={handleSubmit}>

          <textarea value={textareas} onChange={(e)=>setTextareas(e.target.value)} />

        <input type="submit" value="Post Thread" className="bg-primary-500"/>
      </form>
    </>
  )
}