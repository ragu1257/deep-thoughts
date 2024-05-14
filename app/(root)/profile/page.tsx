
import ProfileHeader from "@/components/shared/ProfileHeader";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {  
  const user = await currentUser();
  if(!user) return <p className="text-light-1">Please Login to view profile</p>
  return (
    <div>
      <h1 className="head-text">Profile</h1>
      <ProfileHeader email={user?.emailAddresses[0].emailAddress ?? ""} name={user?.firstName ?? ""}  userName={user?.username ?? ""} id={user?.id ?? ""}/>
    </div>
  );
}
export default Page;