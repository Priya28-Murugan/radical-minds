const timeSlots = {
  Morning: [
    { time: "08:00 AM", disabled: true },
    { time: "09:00 AM", disabled: true },
    { time: "10:00 AM" },
    { time: "11:00 AM" },
  ],
  Afternoon: [
    { time: "12:00 PM" },
    { time: "01:00 PM", disabled: true },
    { time: "02:00 PM" },
    { time: "03:00 PM" },
  ],
  Evening: [
    { time: "04:00 PM" },
    { time: "05:00 AM" },
    { time: "06:00 PM", disabled: true },
    { time: "07:00 PM" },
  ],
  Night: [
    { time: "08:00 PM" },
    { time: "09:00 AM" },
    { time: "10:00 PM" },
    { time: "11:00 PM", disabled: true },
  ],
};

export default timeSlots;
