import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./index.css";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;
