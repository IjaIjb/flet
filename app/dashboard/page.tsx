"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const router = useRouter();

  // Example of using useEffect
  useEffect(() => {
    router.replace("/dashboard/home");
  }, [router]);

  return (
    <div className="relative bg-[#F7F7F7] w-full h-full flex">
      <Layout>lll</Layout>
    </div>
  );
};

export default Dashboard;


