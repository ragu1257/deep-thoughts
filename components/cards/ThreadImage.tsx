"use client";

import { updateIsLiked } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { useState } from "react";

export default function ThreadImage({
  comment_id,
  isLiked,
}: {
  readonly comment_id: string;
  readonly isLiked: boolean;
}) {
  const [isLikedClicked, setIsLikedClicked] = useState(isLiked);
  const submitLike = async () => {
    await updateIsLiked(comment_id, !isLikedClicked);

    setIsLikedClicked(!isLikedClicked);
  };
  return (
    <Image
      src={
        isLikedClicked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"
      }
      alt="heart"
      width={24}
      height={24}
      className="cursor-pointer"
      onClick={submitLike}
    />
  );
}
