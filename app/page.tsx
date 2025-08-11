"use client";
import { useRouter } from "next/navigation";
import Header from "./components/dashboardComponents/Header";
import PastSession from "./components/dashboardComponents/PastSession";
import UpcomingSession from "./components/dashboardComponents/UpcomingSession";

export default function Dashboard() {
  const router = useRouter();

  const scheduleClick = () => {
    router.push("/schedule-session");
  };
  return (
    <div className="bg-custom-gradient min-h-screen">
      <Header />
      <div className="p-4 text-white">
        <UpcomingSession />
        <PastSession />
        <button
          className="fixed bottom-2 w-[90%] py-3 text-lg font-semibold text-white rounded-lg bg-header-gradient"
          onClick={scheduleClick}
        >
          Schedule Now
        </button>
      </div>
    </div>
  );
}
