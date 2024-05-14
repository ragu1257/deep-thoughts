import Link from "next/link";
import Image from "next/image";
import ThreadImage from "./ThreadImage";

const ThreadCard = ({
  text,
  author,
  isLiked,
  comment_id
}: {
  text: string;
  comment_id: string;
  isLiked: boolean;
  author: { id: string; name: string};
}) => {
  return (
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7 mt-3">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col">
            <Link className="w-fit" href={`/profile/${author.id}`}>
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{text}</p>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <ThreadImage isLiked={isLiked ?? false} comment_id={comment_id}/>
                <Image
                  src="/assets/reply.svg"
                  alt="reply"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <Image
                  src="/assets/repost.svg"
                  alt="report"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                 <Image
                  src="/assets/share.svg"
                  alt="sahre"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
