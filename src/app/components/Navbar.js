import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <div className="flex justify-between p-[2%] font-semibold">
      <Link href={"/"}>Home</Link>
      <Link href={"/protected"}>Protected</Link>
      <Link href={"/everyone"}>Everyone</Link>
      {session ? (
        <Link href={"/api/auth/signout"}>
          <button>Logout</button>
        </Link>
      ) : null}
    </div>
  );
}
