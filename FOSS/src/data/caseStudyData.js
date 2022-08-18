import project1Img from "../images/business/project1.png";
import project2Img from "../images/business/project2.png";
import project3Img from "../images/business/project3.png";
import project4Img from "../images/business/project4.png";

const caseStudyData = [
  {
    img: project1Img,
    title: "honeysuckle studios",
    url: "honeysuckle-studios",
    roles: "ux designer, web developer, graphic designer",
    theme: "white",
    animTime: 1,
  },
  {
    img: project2Img,
    title: "all solutions",
    url: "all-solutions",
    roles: "ux designer, web developer, SEO assistant",
    theme: "blue",
    animTime: 2,
  },
  {
    img: project3Img,
    title: `bonnie's dance studio`,
    url: "bonnie's-dance-studios",
    roles: "ux designer, web devloper, graphic designer",
    theme: "white",
    animTime: 2,
  },
  {
    img: project4Img,
    title: "mark veldevere guitar studios",
    url: "mark-veldevere-guitar-studios",
    roles: "ux designer, web developer",
    theme: "tan",
    animTime: 3,
  },
];

caseStudyData.forEach((obj, index) => (obj.id = index + 1));

export default caseStudyData;
