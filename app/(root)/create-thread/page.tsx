import PostThreads from "@/components/forms/PostThreads";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  if(!user) return null

  const userInfo = await fetchUser(user.id)
  
  return (
    <div>
      <h1 className="head-text">Create Thread</h1>
      <PostThreads userInfoID={userInfo._id} userInfoName={userInfo.name}/>
    </div>
  );
}