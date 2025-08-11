export default function PastSession() {
  const sessionsList = [
    {
      time: "12:00 AM",
      name: "Dr. Ramesh Naik",
      date: "Tuesday, March 25, 2023",
    },
    {
      time: "10:30 AM",
      name: "Dr. Suresh Sawant",
      date: "Tuesday, March 15, 2023",
    },
    {
      time: "09:30 AM",
      name: "Dr. Neeta Singh",
      date: "Tuesday, Feb 25, 2023",
    },
  ];
  return (
    <div className="mt-[10px] text-black">
      <h2 className="font-semibold text-sm">Past Sessions</h2>
      {sessionsList.map((session, index) => (
        <div key={index} className="bg-[#ffffff80] rounded-xl p-4 mt-2 flex">
          <p className="font-semibold text-[13px] mr-3 flex  items-center">
            {session.time}
          </p>
          <div className="border border-[#0000001A]"></div>
          <div className="ml-3 ">
            <p className="font-semibold text-[13px]">{session.name}</p>
            <p className=" text-secondaryColor font-medium text-xs">
              Previous Session: <br /> {session.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
