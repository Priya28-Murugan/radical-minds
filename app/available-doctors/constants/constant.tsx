import doctor1 from "@/public/images/availableDoctorProfiles/doctor1.svg";
import doctor2 from "@/public/images/availableDoctorProfiles/doctor2.svg";
import doctor3 from "@/public/images/availableDoctorProfiles/doctor3.svg";
import doctor4 from "@/public/images/availableDoctorProfiles/doctor4.svg";

const doctorList = [
  {
    image: doctor1,
    name: "Dr. Tejas Sharma",
    phone: "+91 98765 43210",
    expertise: "Gynaecology",
    gender: "Male",
    sessionMode: "In-Person & Online",
    sessionFee: "₹1,500/-",
  },
  {
    image: doctor2,
    name: "Dr. Ramesh Naik",
    phone: "+91 98765 11111",
    expertise: "Cardiology",
    gender: "Male",
    sessionMode: "Online",
    sessionFee: "₹2,000/-",
  },
  {
    image: doctor3,
    name: "Dr. Priya Verma",
    phone: "+91 98765 22222",
    expertise: "Dermatology",
    gender: "Female",
    sessionMode: "In-Person",
    sessionFee: "₹1,800/-",
  },
  {
    image: doctor4,
    name: "Dr. Ayesha Khan",
    phone: "+91 98765 33333",
    expertise: "Pediatrics",
    gender: "Female",
    sessionMode: "In-Person & Online",
    sessionFee: "₹1,500/-",
  },
];

export default doctorList;
