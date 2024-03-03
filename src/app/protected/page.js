import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Protected() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackurl=/protected");
  }

  return (
    <div className="flex gap-9 flex-col items-center justify-center h-[85vh]">
      {session ? (
        <>
          <p>Hello {session.user.name}</p>
          {session.user.image ? (
            <img src={session.user.image} className="h-24 w-24 rounded-full" />
          ) : null}

          <p>There is No Protected Just Kidding 😉</p>
        </>
      ) : (
        <p>Protected Content You Must BE Logged In To Continue</p>
      )}
    </div>
  );
}
