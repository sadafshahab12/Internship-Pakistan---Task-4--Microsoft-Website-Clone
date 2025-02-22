import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ProductCase from "./components/ProductCase";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <HeroSection />
        <ProductCase />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
