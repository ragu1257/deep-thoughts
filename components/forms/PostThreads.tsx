"use client"
import { useRouter } from 'next/navigation'
import { createThread } from "@/lib/actions/thread.actions"
import { useState } from "react"

export default function PostThreads({ userInfoID, userInfoName }: Readonly<{ userInfoID: any, userInfoName: string }>) {
    const [textareas, setTextareas] = useState("")
    const router = useRouter()
    const handleSubmit = async (e: any) => {
      e.preventDefault()
      await createThread({
        text: textareas,
        author: userInfoID,
        communityId: null
      })
      router.push("/")
    }
  return (
    <>
    <h1 className="head-text mb-4">Posting thoughts for {userInfoName ?? "you"}</h1>
    <form className="flex flex-col justify-start gap-10" onSubmit={handleSubmit}>

          <textarea className='leftsidebar_link'  value={textareas} onChange={(e)=>setTextareas(e.target.value)} />

        <input type="submit" value="Post Thread" className="bg-primary-500 leftsidebar_link justify-center cursor-pointer p-2 text-light-1"/>
      </form>
    </>
  )
}