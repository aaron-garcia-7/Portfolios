import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayout, restoreLayout } from "../reducers/layoutReducer";
import { hideElements, showElements } from "../reducers/hideReducer";

// Sections
import About from "../sections/About";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Resume from "../sections/Resume";
import Footer from "../sections/Footer";

// Components
import Logo from "../components/Logo";
import ContactBtn from "../components/buttons/ContactBtn";
import ResumeBtn from "../components/buttons/ResumeBtn";
import AboutBtn from "../components/buttons/AboutBtn";
import WorkBtn from "../components/buttons/WorkBtn";
import SocialLinks from "../components/buttons/SocialLinks";
import ScreenSweeper from "../components/ScreenSweeper";
import MobileNav from "../components/MobileNav";
import Video from "../components/Video";
import Burger from "../components/Burger";

// Conditionally used
import Burger2 from "../components/Burger2";
import GridArea from "../components/GridArea";
import MouseDiv from "../components/MouseDiv";

const Home = ({ loading }) => {
  const dispatch = useDispatch();
  const { navOpen } = useSelector((store) => store.nav);

  // Scroll Animation (button rearrangement)
  const [y, setY] = useState(window.scrollY);
  const checkTopDistance = () => {
    window.scrollY > 20 ? dispatch(changeLayout()) : dispatch(restoreLayout());
  };

  // Hide Elements on no scroll && show on scroll
  const { display } = useSelector((store) => store.hide);
  const [scrollTimer, setScrollTimer] = useState(null);

  const scrollHandler = () => {
    dispatch(showElements());
    if (scrollTimer !== null) {
      clearTimeout(scrollTimer);
    }
    setScrollTimer(
      setTimeout(() => {
        dispatch(hideElements());
      }, 200)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollTimer]);

  // Setting up div for mouse
  const [posX, setPosX] = useState(window.pageX);
  const [posY, setPosY] = useState(window.pageY);
  const [toggle, setToggle] = useState(false);

  const locateMouse = (e) => {
    setPosX(e.pageX);
    setPosY(e.pageY);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", checkTopDistance);
    window.addEventListener("mousemove", locateMouse);

    return () => {
      window.removeEventListener("scroll", checkTopDistance);
      window.removeEventListener("mousemove", locateMouse);
    };
  }, []);

  return (
    <>
      {/* <Burger2 /> */}
      {/* <GridArea /> */}
      <ScreenSweeper />
      {!loading && <Logo setToggle={setToggle} display={display} />}
      <AboutBtn />
      <WorkBtn />
      <Burger />
      {navOpen && <MobileNav />}
      <ContactBtn />
      <ResumeBtn />
      <SocialLinks />
      <Video />
      <Hero />
      <About />
      <Work />
      <Resume />
      <Footer />
    </>
  );
};

export default Home;
