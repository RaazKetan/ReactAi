
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import './App.css'
import Username from "./Components/UserName/Username";
import Greeting from './Components/Greeting/Greeting';
import { Routes, Route } from 'react-router-dom';

function App() {


 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
       <Route path="/reactai" element={<Username/>} />
        <Route path="/greeting" element={<Greeting  />} />
        <Route path="/greeting-:name" element={<Greeting  />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
 );
}

export default App;
