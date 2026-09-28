import { About } from "./components/About";
import { FindUs } from "./components/FindUs";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { InstagramPost } from "./components/InstagramPost";
import { MenuSection } from "./components/MenuSection";
import { MobileActionBar } from "./components/MobileActionBar";
import { Navbar } from "./components/Navbar";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <MenuSection />
        <WhyChooseUsSection />
        <Gallery />
        <InstagramPost />
        <FindUs />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;
