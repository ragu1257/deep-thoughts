import ThreadDelete from "../cards/ThreadDelete";

interface Props {
  posts: any;
  userId: string;
}

import React from "react";

const ThreadsTab = ({ posts, userId }: Props) => {
  return (
    <div>
      {posts.map((thread: any) => {
        return (
          <div
            className="flex w-full flex-col rounded-xl bg-dark-2 p-7 mt-3"
            key={thread._id}
          >
            <article className="flex w-full flex-row ">
              <p className="grow"> {thread.text} </p>
              <ThreadDelete threadId={thread._id} userId={userId} />
            </article>
            <div className="text-light-1 flex w-full">
              <p className="text-base-medium text-gray-1">
                Created on:{" "}
                {new Date(thread.createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ThreadsTab;
