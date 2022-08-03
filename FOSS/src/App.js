import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLayout, restoreLayout } from "./reducers/layoutReducer";

import Logo from "./components/Logo";
import ContactBtn from "./components/ContactBtn";
import ResumeBtn from "./components/ResumeBtn";
import SocialLinks from "./components/SocialLinks";

import About from "./sections/About";
import Hero from "./sections/Hero";

import GlobalStyles from "./GlobalStyles";
import AboutBtn from "./components/AboutBtn";
import TestRuler from "./components/TestRuler";
import WorkBtn from "./components/WorkBtn";
import HeroVideo from "./sections/HeroVideo";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
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

  const [loading, setLoading] = useState(true);

  // Find way to temporarily disable scroll///
  // const lockScroll = () => {
  //   loading ? console.log("loading") : console.log("done");
  // };

  useEffect(() => {
    const loadTime = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadTime);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      {/* <TestRuler /> */}
      {loading && <Loading />}
      <Logo />
      <AboutBtn />
      <WorkBtn />
      <ContactBtn />
      <ResumeBtn />
      <SocialLinks />
      {/* <Hero /> */}
      <HeroVideo />
      <About />
    </div>
  );
}

export default App;
