import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLayout, restoreLayout } from "./reducers/layoutReducer";
import GlobalStyles from "./GlobalStyles";

import About from "./sections/About";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2";

// import LoadingAlt from "./components/LoadingAlt";
import Loading from "./components/Loading";
import Logo from "./components/Logo";
import ContactBtn from "./components/buttons/ContactBtn";
import ResumeBtn from "./components/buttons/ResumeBtn";
import AboutBtn from "./components/buttons/AboutBtn";
import WorkBtn from "./components/buttons/WorkBtn";
import SocialLinks from "./components/buttons/SocialLinks";
import GridArea from "./components/GridArea";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MouseDiv from "./components/MouseDiv";
import ScreenSweeper from "./components/ScreenSweeper";

function App() {
  const dispatch = useDispatch();
  // Scroll Animation (button rearrangement)
  const [y, setY] = useState(window.scrollY);
  const checkTopDistance = () => {
    window.scrollY > 20 ? dispatch(changeLayout()) : dispatch(restoreLayout());
  };
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", checkTopDistance);

    return () => {
      window.removeEventListener("scroll", checkTopDistance);
    };
  }, []);

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
    window.addEventListener("mousemove", locateMouse);
    return () => {
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
      {!loading && <Logo setToggle={setToggle} />}
      <MouseDiv posX={posX} posY={posY} toggle={toggle} />
      <AboutBtn />
      <WorkBtn />
      <ContactBtn />
      <ResumeBtn />
      <SocialLinks />
      <Hero />
      {/* <Hero2 /> */}
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
