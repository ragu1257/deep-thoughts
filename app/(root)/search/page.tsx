import { getAllUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  
  const allUsers = await getAllUsers();
  
  if (!user) return <p className="text-light-1">Please Login to view profile</p>;

  return (
    <div>
      <h1 className="head-text">Find all the Users</h1>
      <div>
        {allUsers.map((user: any) => (
        <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7 mt-3" key={user.id}>
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col grow">
            
            <p className=" text-light-2">{user.name}</p>
            <div className="mt-1 flex flex-col">
              <div className="flex flex-col gap-1">
                <p className="text-gray-1">
                  @ {user.username}</p>
                  <p className="mt-2 text-small-regular text-light-2">Thread(s) count: {user.threads.length}</p>
              </div>
            </div>
           
          </div>
          <div className="text-small-regular ">
              <p className="text-small-regular text-light-2">User since</p>
              <p className="text-gray-1">{new Date(user.createdAtUser ).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}</p>
            </div>
        </div>
      </div>
    </article>
        ))}
        </div>
    </div>
  );
}