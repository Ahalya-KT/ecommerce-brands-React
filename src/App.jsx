import "./App.css";
import Category from "./compoents/Category";
import Navbar from "./compoents/Navbar";
import Offers from "./compoents/Offers";
import TrendingItems from "./compoents/TrendingItems";
import ContactUs from "./compoents/ContactUs";
import About from "./compoents/About";
import Footer from "./compoents/Footer";
import HomeOutdoor from "./compoents/HomeOutdoor";
import ConsumerElectro from "./compoents/ConsumerElectro";
import Recoment from "./compoents/Recoment";
import Extraservice from "./compoents/Extraservice";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Category />

      <TrendingItems />

      <Offers />

      <HomeOutdoor />

      <ConsumerElectro />

      <ContactUs />

      <Recoment />
      <Extraservice />

      <About />
      <Footer />
    </>
  );
}

export default App;
