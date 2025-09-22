import {BrowserRouter} from "react-router-dom";
import {Header, Hero, AboutUs, Quality, Products, Gallery, Contact, Footer} from './components/sections';
import {styles} from './styles.js';

function App() {
  return (
      <BrowserRouter>
          <div className="relative z-0">
              <div className="h-screen bg-[url(./assets/img/background_pond.webp)] bg-cover bg-[center_top]">
                  <Header />
                  <Hero />
              </div>
              <div>
                  <AboutUs />
                  <Quality />
                  <Products />
                  <Gallery />
                  <Contact />
              </div>
              <div className={`${styles.padding} bg-tiefbraun text-mandelweiss `}>
                  <Footer />
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App
