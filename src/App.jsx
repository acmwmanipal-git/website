import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}