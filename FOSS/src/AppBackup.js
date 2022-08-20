// Backed up 08/17/0222

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayout, restoreLayout } from "./reducers/layoutReducer";
import { hideElements, showElements } from "./reducers/hideReducer";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// Sections
import About from "./sections/About";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2";
import Work from "./sections/Work";
import Resume from "./sections/Resume";
import Footer from "./sections/Footer";

// Components
import GridArea from "./components/GridArea";
// import LoadingAlt from "./components/LoadingAlt";
import Loading from "./components/Loading";
import Logo from "./components/Logo";
import ContactBtn from "./components/buttons/ContactBtn";
import ResumeBtn from "./components/buttons/ResumeBtn";
import AboutBtn from "./components/buttons/AboutBtn";
import WorkBtn from "./components/buttons/WorkBtn";
import SocialLinks from "./components/buttons/SocialLinks";
import MouseDiv from "./components/MouseDiv";
import ScreenSweeper from "./components/ScreenSweeper";
import MobileNav from "./components/MobileNav";
import Video from "./components/Video";
import Burger from "./components/Burger";
import Burger2 from "./components/Burger2";

function App() {
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
      setTimeout(
        () => {
          dispatch(hideElements());
        },
        200
        // window.innerWidth > 200 ? 4000 : 0
      )
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollTimer]);

  // Loading Animation Timeout
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loadTime);
    };
  }, []);

  // Scroll to top on page refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

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
    <div>
      <GlobalStyles loading={loading} />
      {/* <GridArea /> */}
      {loading && <Loading />}
      {/* <Loading /> */}
      <ScreenSweeper />
      {!loading && <Logo setToggle={setToggle} display={display} />}
      {/* <MouseDiv posX={posX} posY={posY} toggle={toggle} /> */}
      <AboutBtn />
      <WorkBtn />
      <Burger />
      {/* <Burger2 /> */}
      {navOpen && <MobileNav />}
      {/* <MobileNav /> */}
      <ContactBtn />
      <ResumeBtn />
      <SocialLinks />
      <Video />
      <Hero />
      {/* <Hero2 /> */}
      <About />
      <Work />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
