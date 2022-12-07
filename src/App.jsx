
import { Route,Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"


function App() {


  return ( 
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
        <Route path="/Detail/:id" element={<Detail></Detail>}/>
        <Route path="/Favs" element={<Favs></Favs>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>        
    </Routes>    
    <Footer/>
    </div>
      
  );
}

export default App;
