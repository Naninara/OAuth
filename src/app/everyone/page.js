import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
export const metadata = {
  title: "Everyone Page",
  description: "Everyone Page",
};

export default async function Everone() {
  const session = await getServerSession(options);
  return (
    <div className="flex items-center justify-center h-[85vh]">
      EveryOne page Can Access This Page
    </div>
  );
}
