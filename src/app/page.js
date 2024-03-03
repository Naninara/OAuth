import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import Navbar from "./components/Navbar";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className=" flex gap-5 flex-col items-center justify-center h-[85vh]">
      {session ? (
        <>
          <p>Hello {session.user.name}</p>
          {session.user.image ? (
            <img src={session.user.image} className="h-24 w-24 rounded-full" />
          ) : null}

          <p>From Home Page</p>
        </>
      ) : (
        <p>You Must Logged IN</p>
      )}
    </main>
  );
}
