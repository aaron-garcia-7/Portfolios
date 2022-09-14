import githubImg from "../images/graphics/github.svg";
import githubImg2 from "../images/graphics/githubDark.svg";
import twitterImg from "../images/graphics/twitter.svg";
import twitterImg2 from "../images/graphics/twitterDark.svg";
import linkedinImg from "../images/graphics/linkedin.svg";
import linkedinImg2 from "../images/graphics/linkedInDark.svg";

const socialMediaData = [
  {
    name: "github",
    src: "https://github.com/aaron-garcia-7",
    img: githubImg,
    imgDark: githubImg2,
  },
  {
    name: "twitter",
    src: "https://twitter.com/aaron_garcia_7",
    img: twitterImg,
    imgDark: twitterImg2,
  },
  {
    name: "linkedin",
    src: "https://www.linkedin.com/in/aaron-garcia-3b7081211/",
    img: linkedinImg,
    imgDark: linkedinImg2,
  },
];

socialMediaData.forEach((el, i) => (el.id = i + 1));

export default socialMediaData;
