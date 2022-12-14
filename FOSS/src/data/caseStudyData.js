import logo1 from "../images/honeysuckleStudios/logo2.svg";
import logo2 from "../images/allSolutions/logo2.png";
import logo3 from "../images/bonniesDance/logo.png";
import logo4 from "../images/marksGuitar/logo.png";

const caseStudyData = [
  {
    img: logo1,
    title: "honeysuckle studios",
    url: "honeysuckle-studios",
    roles: "ux designer, web developer, graphic designer",
    theme: "#EFA0A0", // pink
    animTime: 1,
    inProgress: false,
  },
  {
    img: logo2,
    title: "all solutions",
    url: "all-solutions",
    roles: "ux designer, web developer, SEO assistant",
    theme: "#0E9BFF", // blue
    animTime: 2,
    inProgress: false,
  },
  {
    img: logo3,
    title: `bonnie's dance studio`,
    // url: "bonnie's-dance-studios",
    roles: "ux designer, web devloper, graphic designer",
    theme: "white",
    animTime: 2,
    inProgress: true,
  },
  {
    img: logo4,
    title: "mark veldevere guitar studios",
    // url: "mark-veldevere-guitar-studios",
    roles: "ux designer, web developer",
    theme: "tan",
    animTime: 3,
    inProgress: true,
  },
];

caseStudyData.forEach((obj, index) => (obj.id = index + 1));

export default caseStudyData;
