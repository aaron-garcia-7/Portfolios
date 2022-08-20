import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";

import Home from "./pages/Home";
import Project1 from "./pages/caseStudies/honeysuckle-studios";
import Project2 from "./pages/caseStudies/all-solutions";

import Loading from "./components/Loading";
import { unlockScroll } from "./reducers/lockScrollReducer";

function App() {
  const dispatch = useDispatch();
  const { scrollLock } = useSelector((store) => store.lockScroll);
  const [width, setWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setWidth(window.innerWidth);
    return width > 580 ? dispatch(unlockScroll()) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", widthHandler);

    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, [width]);

  // Loading Animation Timeout
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(loadTime);
  }, []);

  // Scroll to top on page refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <GlobalStyles loading={loading} scrollLock={scrollLock} />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home loading={loading} />} />
        <Route path="/caseStudies/honeysuckle-studios" element={<Project1 />} />
        <Route path="/caseStudies/all-solutions" element={<Project2 />} />
      </Routes>
    </div>
  );
}

export default App;
