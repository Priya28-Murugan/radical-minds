"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrowBack from "@/public/images/arrowBack.svg";
import patient from "@/public/images/scheduleSessionProfiles/patient.svg";
import practitioner from "@/public/images/scheduleSessionProfiles/practitioner.svg";
import {
  Drawer,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import timeSlots from "./constants/constant";

export default function ScheduleSession() {
  const [personName, setPersonName] = useState<string[]>([]);
  const [mode, setMode] = useState("in-person");
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const names = ["Counselling ( 1 hour )", "Counselling"];

  return (
    <div className="bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5] min-h-screen">
      <div className=" text-black flex py-5 pl-4 gap-2">
        <Image
          src={arrowBack}
          alt="arrowBack"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <p className="font-semibold text-sm">Schedule Session</p>
      </div>
      <div className="px-4 mb-5">
        <p className="font-medium text-sm text-black text-opacity-50">
          Patient
        </p>
        <div className="bg-white/50 rounded-[10px] p-3 flex items-center gap-3  mt-[6px]">
          <Image src={patient} alt="patient" />
          <div>
            <p className="font-semibold text-sm">Shubham Naik</p>
            <p className="text-[11px] font-medium text-secondaryColor">
              +91 9876543210
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mb-5">
        <p className="font-medium text-sm text-black text-opacity-50">
          Assign Practitioner
        </p>
        <div className="bg-white/50 rounded-[10px] p-3 flex items-center gap-3 mb-4 mt-[6px]">
          <Image src={practitioner} alt="practitioner" />
          <div>
            <p className="font-semibold text-sm">Saria Dilon</p>
            <p className="text-[11px] font-medium text-secondaryColor">
              +91 9876543210
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mb-5">
        <label className="block mb-1 font-semibold text-sm text-black text-opacity-50">
          Session Type
        </label>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          variant="standard"
          disableUnderline
          value={personName}
          onChange={handleChange}
          className="bg-white rounded-[10px] w-full p-3"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="px-4 mb-5">
        <label className="block mb-1 font-semibold text-sm text-black text-opacity-50">
          Session Mode
        </label>
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              defaultChecked
              className="text-black hover:border-black checked:bg-black checked:border-black"
              onChange={() => setMode("in-person")}
            />
            <span>In-Person</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              onChange={() => setMode("online")}
            />
            <span>Online</span>
          </label>
        </div>
      </div>
      <div className="px-4 mb-5">
        <div className="grid grid-cols-2 gap-4 mb-4 b">
          <div>
            <label className="block mb-1 font-semibold text-sm text-black text-opacity-50">
              Session Date
            </label>
            <input type="date" className=" rounded-[10px] w-full p-3 " />
          </div>
          <div>
            <label className="block mb-1  font-semibold text-sm text-black text-opacity-50">
              Session Time Slot
            </label>
            <input
              readOnly
              placeholder="HH : MM"
              className="w-full bg-white/50 rounded-[10px] p-3 "
              onClick={() => setOpen(true)}
              value={selectedTime}
            />
          </div>
          <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
            <div className="p-4 flex justify-between items-center border-b border-gray-300">
              <h2 className="text-lg font-semibold">Select Time Slot</h2>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className="p-4 space-y-6">
              {Object.entries(timeSlots).map(([period, slots]) => (
                <div key={period}>
                  <h3 className="text-base font-semibold mb-3">{period}</h3>
                  <div className="flex flex-wrap gap-3">
                    {slots.map(({ time, disabled }) => (
                      <button
                        key={time}
                        disabled={disabled}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-lg border text-sm 
                      ${
                        disabled
                          ? "border-red-200 text-red-200 cursor-not-allowed"
                          : selectedTime === time
                          ? "border-red-500 text-white bg-red-500"
                          : "border-red-500 text-red-500 hover:bg-red-50"
                      }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 p-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setSelectedTime("");
                  setOpen(false);
                }}
                className="flex-1 py-3 border border-red-500 text-red-500 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                disabled={!selectedTime}
                onClick={() => setOpen(false)}
                className={`flex-1 py-3 rounded-lg font-medium bg-header-gradient text-white`}
              >
                Confirm
              </button>
            </div>
          </Drawer>
        </div>
      </div>
      {mode === "online" && (
        <div className="mb-5 px-4">
          <label className="block mb-1 font-medium text-sm text-black text-opacity-50">
            Online Session Link
          </label>
          <input
            type="text"
            placeholder="Add Online Session Link or WhatsApp Number"
            className="w-full bg-white rounded-[10px] p-3 "
          />
        </div>
      )}
      <div className="px-4 mb-5">
        <label className="block mb-1 font-medium text-sm text-black text-opacity-50">
          Session Details (Optional)
        </label>
        <textarea
          placeholder="Enter session details here"
          className="w-full rounded-[10px] p-3  mb-6 font-medium text-xs"
          rows={5}
        ></textarea>
        <div className="flex gap-4 pb-[3%]">
          <button className="flex-1 border border-red-400 text-red-500 rounded-lg py-3 font-medium">
            Cancel
          </button>
          <button
            className="flex-1 rounded-lg py-3 font-medium text-white bg-header-gradient"
            onClick={() => router.push("/available-doctors")}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
