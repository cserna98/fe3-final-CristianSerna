import React from "react";
import { GlobalContext } from './utils/global.context';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({dentistInfo}) => { 

    const [isfav,setisFav] = useState(false)  
    const [fav,Setfav] = useState([])   

    const addFav = ()=>{
        setisFav(!isfav)
        if(isfav){
        localStorage.setItem(dentistInfo.id, JSON.stringify(dentistInfo))       
      } else{
        localStorage.removeItem(dentistInfo.id);
      }    
        console.log(isfav)
     // Aqui iria la logica para agregar la Card en el localStorage
  }
  useEffect(()=>{
      if(isfav){
        let newFav = JSON.parse(localStorage.getItem(dentistInfo.id))   
        console.log(newFav)    
        Setfav([...fav,newFav]) 
        console.log(fav)  
      }        
  },[isfav])

  return (
    <div className="card">        
        <Link to={`Detail/${dentistInfo.id}`}>
        <img src="../images/doctor.jpg" id="imgDoctor"/>
        <h4>{dentistInfo.name}</h4>
        <h4>{dentistInfo.username}</h4>
        <h4>{dentistInfo.id}</h4>         
        </Link>
        {/* En cada card deberan mostrar en name - username y el id */ }

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{!isfav ? "Add fav" : "erase fav" }</button>
    </div>
  );
};

export default Card;
