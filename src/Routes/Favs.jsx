import React, { useEffect } from "react";
import Card from "../Components/Card";
import { GlobalContext } from '../Components/utils/global.context'
import { useState} from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const {theme,dentists,fav,Setfav} = GlobalContext()


  const storedData = localStorage.getItem('myData');

 

  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">        
        {
          fav.map((e)=>(<Card key={e.id} dentistInfo={e} >cards</Card>))
        }        
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
