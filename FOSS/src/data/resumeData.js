const resumeData = [
  {
    title: "Honeysuckle Studios",
    date: "September 2022",
    pos1: "UX designer & graphic designer.",
    pos2: "Front-end developer. SEO specialist.",
    url: "https://honeysuckle-studios.com/",
    delay: 0.6,
  },
  {
    title: `Bonnie's Dance Studio`,
    date: "November 2022",
    pos1: "UX designer & visual designer.",
    pos2: "Front-end developer. SEO specialist.",
    url: "http://bonniesdanceschool.com/",
    delay: 1,
  },
  {
    title: "All Solutions",
    date: "August 2022",
    pos1: "Front-end developer. SEO specialist.",
    pos2: "Co-designer & ux designer",
    url: "https://ashaac.com/",
    delay: 1.4,
  },
  // {
  //   title: "Mark Veldevere Guitar Studios",
  //   date: "May 2022 - August 2022",
  //   pos1: "UX designer.",
  //   pos2: "Front-end developer. SEO specialist.",
  //   url: "http://guitarlessonsutah.net/",
  //   delay: 1.8,
  // },
];

resumeData.forEach((obj, index) => (obj.id = index + 1));

export default resumeData;
