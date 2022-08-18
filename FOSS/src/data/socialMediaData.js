import githubImg from "../images/graphics/github.svg";
import twitterImg from "../images/graphics/twitter.svg";
import linkedinImg from "../images/graphics/linkedin.svg";

const socialMediaData = [
  {
    name: "github",
    src: "https://github.com/aaron-garcia-7",
    img: githubImg,
  },
  {
    name: "twitter",
    src: "https://twitter.com/aaron_garcia_7",
    img: twitterImg,
  },
  {
    name: "linkedin",
    src: "https://www.linkedin.com/in/aaron-garcia-3b7081211/",
    img: linkedinImg,
  },
];

socialMediaData.forEach((el, i) => (el.id = i + 1));

export default socialMediaData;
