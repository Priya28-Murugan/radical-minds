import profile from "@/public/images/profile.svg";
import SearchWithFilter from "../searchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-header-gradient rounded-b-xl gap-[10px]  pt-8 pr-4 pb-3 pl-4 text-white relative">
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-medium">Good morning,</p>
          <h1 className="text-[19px] font-semibold">Manjunath Naik</h1>
        </div>
        <Image src={profile} alt="profile" />
      </div>

      <div className="flex mt-4 space-x-2 ">
        <SearchWithFilter />
      </div>
    </div>
  );
}
