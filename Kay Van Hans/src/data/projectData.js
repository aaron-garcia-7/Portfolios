import project1 from "../images/graphics/project1.svg";
import project2 from "../images/graphics/project2.svg";
import project3 from "../images/graphics/project3.svg";
import project4 from "../images/graphics/project4.svg";

const projectData = [
  {
    title: "Bonnie’s Dance School",
    name1: "Bonnie’s",
    name2: "Dance",
    name3: "School",
    img: project1,
    role: "UX Design + Front-End Development",
    role2: "",
    date: "Sept. 2022",
    url: "/bonnies-dance-school",
  },
  {
    title: "Honeysuckle Studios",
    name1: "Honeysuckle",
    name2: "Studios",
    name3: null,
    img: project2,
    role: "Visual & Interaction Design",
    role2: "Front-End Development",
    date: "Aug. 2022",
    url: "/honeysuckle-studios",
  },
  {
    title: "Join Sunder",
    name1: "Join Sunder",
    name2: null,
    name3: null,
    img: project3,
    role: "Motion Design +",
    role2: "Front-End Development",
    date: "Feb. 2023",
    url: "/join-sunder",
  },
  {
    title: "What’s Next?",
    name1: "What’s Next?",
    name2: null,
    name3: null,
    img: project4,
    role: "Design ? Development ?",
    role2: "",
    date: "Date Here",
    url: null,
  },
];

projectData.forEach((obj, index) => (obj.id = index + 1));

export default projectData;
