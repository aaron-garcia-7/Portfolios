// // See 'Page Transition In React - React Router V6 and Framer Motion Tutorial' on Youtube ... https://www.youtube.com/watch?v=FdrEjwymzdY&t=209s

// import { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// // import { AnimatePresence } from "framer-motion/dist/frameer-motion"; // This may solve an issue marked at 6:30 of the video

// import Home from "../pages/Home";
// import Project1 from "../pages/caseStudies/honeysuckle-studios";
// import Project2 from "../pages/caseStudies/all-solutions";

// function AnimatedRoutes() {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const loadTime = setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//     return () => clearTimeout(loadTime);
//   }, []);
//   return (
//     <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home loading={loading} />} />
//         <Route path="/caseStudies/honeysuckle-studios" element={<Project1 />} />
//         <Route
//           path="/caseStudies/all-solutions"
//           element={<Project2 loading={loading} />}
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default AnimatedRoutes;
