import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SpeechPage from "./pages/SpeechPage";
import FeedingPage from "./pages/FeedingPage";
import ServicesPage from "./pages/ServicesPage";
import MyoPage from "./pages/MyoPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/services" element={<ServicesPage /> } />
       <Route path="/services/speech" element={<SpeechPage />} />
       <Route path="/services/feeding" element={<FeedingPage />} />
       <Route path="/services/myo" element={<MyoPage />} />
      <Route path="/about/aboutus" element={<AboutPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
