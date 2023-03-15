import React from "react";
import { GlobalContext } from './utils/global.context';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({dentistInfo}) => { 

        
    const {fav,change, setchenge} = GlobalContext()
    const [isfav,setisFav] = useState() 


    const removeFav = () =>{
      localStorage.removeItem(dentistInfo.id);
      setisFav(false)

    }
    const addFav = ()=>{ 
      setchenge(!change)   
      console.log(localStorage)   
        if(isfav){
          removeFav()
        }else{
          localStorage.setItem(dentistInfo.id, JSON.stringify(dentistInfo))
          setisFav(true)
        }
        
     // Aqui iria la logica para agregar la Card en el localStorage
  } 

  useEffect(()=>{
    const foundObject = fav.find(obj => obj.id === dentistInfo.id);

if (foundObject) {
  console.log("El objeto existe en el array:", foundObject);
  setisFav(true)
} else {
  console.log("El objeto no existe en el array");
  setisFav(false)
}
  },[])
 
  
    

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
        <button onClick={addFav} className="favButton">{! isfav ? "Add fav" : "remove favorite" }</button>
    </div>
  );
};

export default Card;
