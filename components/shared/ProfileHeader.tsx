
import "./ProfileHeader.scss";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "./ThreadsTab";
import { fetchPostsById } from "@/lib/actions/thread.actions";

interface Props {
  id: string;
  email: string;
  name: string;
  userName: string;
}

const ProfileHeader = async ({ email, name, userName,id }: Props) => {
  
  const posts =  await fetchPostsById(id);
  

  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex-1 ">
        <h2 className="text-left text-heading3-bold text-light-1">{name}</h2>
        <p className="text-base-medium text-gray-1">{email}</p>
        <p className="text-base-medium text-gray-1">@{userName}</p>
      </div>
      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            <TabsTrigger value="threads" className="tab-trigger">
              <Image src="/assets/tag.svg" width={24} height={24} alt="threads-icon"/>
              Threads
            </TabsTrigger>
            <TabsTrigger value="settings" className="tab-trigger">
            <Image src="/assets/profile.svg" width={24} height={24} alt="threads-icon"/>
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="threads" className="tab-content text-light-1">
          {posts ? <ThreadsTab posts={posts.threads} userId={posts._id}/> : (
            <div>No threads</div>
          
          )}  
          </TabsContent>
          <TabsContent value="settings" className="tab-content text-light-1">
            <h3>Settings</h3>
            <p>Settings are the best!</p>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};
export default ProfileHeader;
