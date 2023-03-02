const skillsData = [
  {
    title: "Development",
    skill1: "Semantic HTML / JSX",
    skill2: "CSS, SCSS, Styled Components",
    skill3: "Modern JavaScript, React, Redux/toolkit",
    skill4: "React Router, Framer Motion, GSAP",
    skill5: "NPM, Github",
  },
  {
    title: "Design",
    skill1: "Design Strategy / Analysis",
    skill2: "Visual, Motion, Interaction Design",
    skill3: "Wireframing, Prototyping, Storyboarding",
    skill4: "Figma, Adobe XD, Sketch, Canva",
    skill5: "Responsive & a11y Design",
  },
  {
    title: "Upcoming",
    skill1: "Next js",
    skill2: "TypeScript",
    skill3: "Tailwind CSS",
    skill4: "Node js, Express",
    skill5: "MongoDB, Mongoose",
  },
];

skillsData.forEach((obj, index) => (obj.id = index + 1));

export default skillsData;
