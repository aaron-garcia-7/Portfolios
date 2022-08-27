import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";

import Home from "./pages/Home";
import Project1 from "./pages/caseStudies/honeysuckle-studios";
import Project2 from "./pages/caseStudies/all-solutions";

import Loading from "./components/Loading";
import { unlockScroll } from "./reducers/lockScrollReducer";

// Conditionally used
import GridArea from "./components/GridArea";

function App() {
  const dispatch = useDispatch();
  const { scrollLock } = useSelector((store) => store.lockScroll);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setPageWidth(window.innerWidth);
    return pageWidth > 580 ? dispatch(unlockScroll()) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", widthHandler);

    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, [pageWidth]);

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
      {/* <GridArea /> */}
      <GlobalStyles loading={loading} scrollLock={scrollLock} />
      {loading && <Loading />}
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} pageWidth={pageWidth} />}
        />
        <Route path="/caseStudies/honeysuckle-studios" element={<Project1 />} />
        <Route
          path="/caseStudies/all-solutions"
          element={<Project2 loading={loading} pageWidth={pageWidth} />}
        />
      </Routes>
    </div>
  );
}

export default App;
