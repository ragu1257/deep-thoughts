"use client";

import { deleteThread } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThreadImage({
  threadId,
  userId,
}: {
  readonly threadId: string, readonly userId: string;
}) {
  const router = useRouter()

  const submitLike = async () => {
    await deleteThread(threadId, userId);
    router.push("/")
  };
  return (
    <Image
      src=
        "/assets/delete.svg"
      
      alt="delete"
      width={24}
      height={24}
      className="cursor-pointer"
      onClick={submitLike}
    />
  );
}