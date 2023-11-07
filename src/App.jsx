import "./App.css";
import Category from "./compoents/Category";
import Navbar from "./compoents/Navbar";
import Offers from "./compoents/Offers";
import TrendingItems from "./compoents/TrendingItems";
import ContactUs from "./compoents/ContactUs";
import About from "./compoents/About";
import Footer from "./compoents/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Category />

      <TrendingItems />

      <Offers />

      <ContactUs />
      <About />
      <Footer />
    </>
  );
}

export default App;
