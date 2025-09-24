import {HashRouter, Routes, Route} from "react-router-dom";
import {Header, Hero, AboutUs, Quality, Products, Gallery, Contact, Footer} from './components/sections';
import { Impressum, Datenschutz } from "./components/pages";
import HeroHeader from "./components/sections/HeroHeader.jsx";
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";



function App() {
  return (
      <HashRouter basename="/langfelder">
          <ScrollToHashElement/>
          <div className="relative z-0 ">
              <Routes>
                  <Route
                      path="/"
                      element={
                          <>
                              <div className="h-screen bg-[url(./assets/img/background_pond.webp)] bg-cover bg-[center_top]">
                                  <Hero />
                              </div>

                              <Header />

                              <div className="max-w-[2000px] mx-auto">
                                  <AboutUs />
                                  <Quality />
                                  <Products />
                                  <Gallery />
                                  <Contact />
                              </div>

                              <Footer />
                          </>
                      }
                  />
                  <Route
                      path="/impressum"
                      element={
                          <>
                              <Impressum />
                              <Footer />
                          </>
                      }
                  />

                  <Route
                      path="/datenschutz"
                      element={
                          <>
                              <Datenschutz />
                              <Footer />
                          </>
                      }
                  />
              </Routes>
          </div>
      </HashRouter>
  )
}

export default App
