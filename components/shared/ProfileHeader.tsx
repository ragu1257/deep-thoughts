
import "./ProfileHeader.scss";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreadsTab from "./ThreadsTab";

interface Props {
  id: string;
  email: string;
  name: string;
  userName: string;
}

const ProfileHeader = ({ email, name, userName,id }: Props) => {

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
            <ThreadsTab id={id} />
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
