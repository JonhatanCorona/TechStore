import React from "react";
import { notFound } from "next/navigation";
import MyOrders from "@/components/MyOrders/MyOrders";
import Profile from "@/components/MyProfile/MyProfile";

const MyAccount = async ({ params }: { params : Promise<{ section : string }> }) => {
  const { section } = await params;


  const allowedSections = ["myOrders", "myProfile"];
  if (!allowedSections.includes(section)) {
    notFound();
  }


  return (
<div className="p-6">
  {section === "myOrders" && <MyOrders />}
  {section === "myProfile" && <Profile />}
</div>
  );
};

export default MyAccount;



