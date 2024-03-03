import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <div className="gap-7 md:gap-0 text-xl md:text-base border-b-2 border-white flex-col justify-center items-center md:flex-row   flex md:justify-between p-[2%] font-semibold">
      <Link href={"/"}>Home Page</Link>
      <Link href={"/protected"}>Protected Page</Link>
      <Link href={"/everyone"}>Everyone Page</Link>
      {session ? (
        <Link href={"/api/auth/signout"}>
          <button>Logout</button>
        </Link>
      ) : (
        <Link href={"/api/auth/signin"}>
          <button>Login Page</button>
        </Link>
      )}
    </div>
  );
}
