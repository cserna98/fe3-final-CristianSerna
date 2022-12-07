import React from "react";
import { GlobalContext } from './utils/global.context';
import {Link} from "react-router-dom";


const Card = ({dentistInfo}) => {
  const {users} = GlobalContext() 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">        
        <Link to={`Detail/${dentistInfo.id}`}>
        <img src="./images/doctor.jpg" id="imgDoctor"/>
        <h4>{dentistInfo.name}</h4>
        <h4>{dentistInfo.username}</h4>
        <h4>{dentistInfo.id}</h4>         
        </Link>
        {/* En cada card deberan mostrar en name - username y el id */ }

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
