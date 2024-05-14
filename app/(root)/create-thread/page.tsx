import PostThreads from "@/components/forms/PostThreads";
import { fetchUser, updateUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if(!user) return <p className="text-light-1">Please Login to create thread</p>
  
  let userInfo = await fetchUser(user.id)
  
  if(userInfo === null){
      await updateUser({
        userId: user.id,
        username: user.username ?? "",
        name: user.firstName ?? "",
        email: user.emailAddresses[0] ? user.emailAddresses[0].emailAddress : "",
        createdAtUser: new Date(user.createdAt ).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      });
     userInfo = await fetchUser(user.id)

  }
  
  
  return (
    <div>
      <h1 className="head-text">Create Thread</h1>
      <PostThreads userInfoID={userInfo._id} userInfoName={userInfo.name}/>
    </div>
  );
}