const caseStudyData = [
  {
    img: "",
    title: "honeysuckle studios",
    roles: "ux designer, web developer, graphic designer",
  },
  {
    img: "",
    title: "all solutions",
    roles: "ux designer, web developer, social media marketing",
  },
  {
    img: "",
    title: "mark veldever guitar studios",
    roles: "ux designer, web developer",
  },
  {
    img: "",
    title: `bonnie's dance studio`,
    roles: "ux designer, web devloper, graphic designer",
  },
];

caseStudyData.forEach((obj, index) => (obj.id = index + 1));

export default caseStudyData;
