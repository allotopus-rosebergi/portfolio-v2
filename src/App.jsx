import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header, Hero, AboutUs, Quality, Products, Gallery, Contact, Footer} from './components/sections';
import { Impressum, Datenschutz } from "./components/pages";
import HeroHeader from "./components/sections/HeroHeader.jsx";
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";



function App() {
  return (
      <BrowserRouter>
          <ScrollToHashElement/>
          <div className="relative z-0">
              <Routes>
                  <Route
                      path="/"
                      element={
                          <>
                              <div className="h-screen bg-[url(./assets/img/background_pond.webp)] bg-cover bg-[center_top]">
                                  <Hero />
                              </div>
                              <Header />
                              <AboutUs />
                              <Quality />
                              <Products />
                              <Gallery />
                              <Contact />
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
      </BrowserRouter>
  )
}

export default App
