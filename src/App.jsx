import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./index.css";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
      <Products />
      <Footer />
    </>
  );
}

export default App;
