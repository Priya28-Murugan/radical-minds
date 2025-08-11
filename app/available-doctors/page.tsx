"use client";
import Image from "next/image";
import arrowBack from "@/public/images/arrowBack.svg";
import SearchWithFilter from "../components/searchInput";
import DoctorsList from "./components/doctorList";
import { useRouter } from "next/navigation";

export default function AvailableDoctors() {
  const router = useRouter();

  return (
    <div className="">
      <div className="bg-white/70 text-black flex py-5 pl-4 gap-2">
        <Image
          src={arrowBack}
          alt="arrowBack"
          onClick={() => router.push("/schedule-session")}
          className="cursor-pointer"
        />
        <p className="font-semibold text-sm">Available Doctors</p>
      </div>
      <div className="p-4 bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5] min-h-screen">
        <div className="flex space-x-2 ">
          <SearchWithFilter />
        </div>
        <DoctorsList />
      </div>
    </div>
  );
}
