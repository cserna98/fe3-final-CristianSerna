
import { Route,Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { GlobalContext } from './Components/utils/global.context'


function App() {
  const {theme} = GlobalContext() 

  return ( 
    <div className={`app ${theme}`} >
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
