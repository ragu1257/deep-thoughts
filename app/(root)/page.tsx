import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";

interface Thread {
  _id: string;
  text: string;
  isLiked: boolean;
  author: {
    id: string;
    name: string;
  };
  }

export default async function Home() {
  const allThreads = await fetchPosts();
console.log(allThreads);


  return (
    <>
      <h1 className="head-text text-left">Home Page</h1>
      <section className="mt-9 flex flex-col gap-0">
        {allThreads?.length === 0 ? (
          <p>No threads found</p>
        ) : (
          allThreads?.map((thread: Thread) => (
            <ThreadCard key={thread._id} comment_id={thread._id} isLiked={thread.isLiked} text={thread.text} author = {thread.author}/>
          ))
        )}
      </section>
    </>
  );
}
