import { fetchPosts } from "@/lib/actions/user.actions";

const ThreadsTab = async({id}: { id: string }) => {
  const posts =  await fetchPosts(id);
  // console.log(JSON.stringify(JSON.parse(posts)));
  if(!posts) return (<div>No threads</div>)
  
  return (
    <div>
     {posts.threads.map((thread: any) => {
        return <section className="mt-9 flex flex-col gap-10" key={thread._id}>{thread.text}</section>
     }
      )}
    </div>
  );
}
export default ThreadsTab;