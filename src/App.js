import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Fooder';
import Home from './components/Home.jsx';
import Room from './pages/Room';
import Facilities from './pages/Facilities.jsx'
import Gallery from './pages/Gallery.jsx';
import EventVenue from './pages/EventVenue.js';
import ContactUs from './pages/ContactUs.jsx';
import Login from './pages/LoginForm.jsx';
import SignupForm from './pages/SignupForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/facilities" element={<Facilities />} />
         <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<EventVenue />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
