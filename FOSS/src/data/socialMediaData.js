import githubImg from "../images/graphics/github.svg";
import twitterImg from "../images/graphics/twitter.svg";
import linkedinImg from "../images/graphics/linkedin.svg";
import instagramImg from "../images/graphics/instagram.svg";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaData = [
  {
    name: "github",
    src: "https://github.com/aaron-garcia-7",
    icon: faGithub,
    img: githubImg,
  },
  {
    name: "twitter",
    src: "https://twitter.com/aaron_garcia_7",
    icon: faTwitter,
    img: twitterImg,
  },
  {
    name: "linkedin",
    src: "https://www.linkedin.com/in/aaron-garcia-3b7081211/",
    icon: faLinkedinIn,
    img: linkedinImg,
  },
  // {
  //   name: "instagram",
  //   src: "https://www.instagram.com/aaron_garcia_7/",
  //   icon: faInstagram,
  //   img: instagramImg,
  // },
];

socialMediaData.forEach((el, i) => (el.id = i + 1));

export default socialMediaData;
