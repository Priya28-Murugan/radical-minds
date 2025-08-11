import Image from "next/image";
import doctorProfile from "@/public/images/doctorProfile.svg";
import onlineStatus from "@/public/images/onlineStatus.svg";
import phoneIcon from "@/public/images/phoneIcon.svg";

export default function UpcomingSession() {
  return (
    <div className=" text-black">
      <h2 className="font-semibold text-sm">Upcoming Session</h2>
      <div className="bg-[#FFFFFF80] rounded-2xl p-4 mt-[10px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-base">11:00 AM</p>
            <p className="text-xs text-secondaryColor font-medium">Bandra</p>
          </div>
          <div className="flex items-center space-x-3">
            <Image src={doctorProfile} alt="doctorProfile" />
            <div className="">
              <p className="font-medium">Dr. Kiran Rathi</p>
              <Image src={phoneIcon} alt="phoneIcon" />
            </div>
          </div>
        </div>
        <p className="text-xs font-medium mt-2 text-secondaryColor">
          Session Duration: 01:00 HR
        </p>
        <div className="flex items-center mt-1 gap-1">
          <p className="text-xs font-medium text-secondaryColor">
            Session Mode: Online
          </p>
          <Image src={onlineStatus} alt="onlineStatus" />
        </div>

        <div className="flex gap-2">
          <button className="mt-3 bg-header-gradient px-4 py-2  text-xs font-semibold rounded-lg text-white">
            Mark as Completed
          </button>
          <p>
            Previous Session: <br />
            Tuesday, March 5, 2023
          </p>
        </div>
      </div>
    </div>
  );
}
