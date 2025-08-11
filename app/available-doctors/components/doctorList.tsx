"use client";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { useState } from "react";
import doctorList from "../constants/constant";

export default function DoctorsList() {
  const [expanded, setExpanded] = useState<number | false>(0);
  const handleChange =
    (panelIndex: number) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelIndex : false);
    };

  return (
    <div className="mt-4 w-full space-y-4">
      {doctorList.map((doctor, index) => (
        <div className="rounded-xl" key={index}>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <div className="flex items-center space-x-4 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <Typography className="font-semibold text-sm">
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-medium text-sm text-secondaryColor"
                  >
                    {doctor.phone}
                  </Typography>
                </div>
              </div>
            </AccordionSummary>
            <div className="border border-[#0000001A]"></div>

            <AccordionDetails className="bg-white/80 px-4 pb-4">
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="font-semibold text-sm">Expertise</p>
                  <p className="font-medium text-xs text-secondaryColor">
                    {doctor.expertise}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">Gender</p>
                  <p className="font-medium text-xs text-secondaryColor">
                    {doctor.gender}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Session mode</p>
                  <p className="font-medium text-xs text-secondaryColor">
                    {doctor.sessionMode}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">Session Fee</p>
                  <p className="font-medium text-xs text-secondaryColor">
                    {doctor.sessionFee}
                  </p>
                </div>
              </div>
              <div className="border border-[#0000001A] mt-5"></div>

              <button className="w-full mt-4 py-3  text-sm rounded-xl text-white font-semibold bg-header-gradient">
                Book Now
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
