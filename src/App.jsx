import {HashRouter, Routes, Route} from "react-router-dom";
import {Hero,Contact, Skills, Projects, Footer} from './components/sections';
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";
import BgImg from "./assets/img/bg-gc-1.webp"
import ProjectsDetailed from "./components/sections/ProjectDetailed.jsx";

function App() {
  return (
      <HashRouter>
          <ScrollToHashElement/>
          <div className="relative z-0 ">
              <Routes>
                  <Route
                      path="/"
                      element={
                          <>
                              <div style={{ backgroundImage: `url(${BgImg})`}}  className={`relative w-full min-h-screen bg-cover bg-[center]`}>
                                  <div className="max-w-[2000px] mx-auto min-h-screen">
                                      <Hero />
                                  </div>
                              </div>

                              <div className="relative w-full bg-dark text-white min-h-[500px]">
                                  <div className="absolute -top-24 left-0 w-full h-24 bg-dark clip-triangle-top"></div>

                                  <div className="relative z-10 p-8 max-w-[2000px] mx-auto">
                                      <Skills />
                                  </div>
                              </div>

                              <div style={{ backgroundImage: `url(${BgImg})`}}  className={`relative w-full min-h-[500px] h-full flex flex-col bg-dark bg-cover bg-fixed bg-[center] `}>
                                  <div className="absolute top-0 left-0 w-full h-24 bg-dark clip-triangle-bottom"></div>
                                  <div className="relative z-10 p-8 pb-0 max-w-[2000px] mx-auto">
                                      <Projects />
                                  </div>
                              </div>

                              <div className="relative w-full bg-dark text-white min-h-[500px]">
                                  <div className="absolute -top-24 left-0 w-full h-24 bg-dark clip-triangle-top"></div>

                                  <div className="relative z-10 p-8 max-w-[2000px] mx-auto">
                                      <Contact />
                                  </div>
                              </div>

                              <Footer />
                          </>
                      }
                  />
                  <Route path="/:slug" element={<ProjectsDetailed />} />
              </Routes>


          </div>
      </HashRouter>
  )
}

export default App
