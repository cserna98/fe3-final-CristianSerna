import React from 'react'
import { useContext,useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const params= useParams();
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist,setdentist] = useState([]) ;
  async function getdentist(){
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);  
  let dentist = await response.json();
  setdentist(dentist)     
  console.log(dentist)  
};
useEffect(()=>{
  getdentist()
},[])


  

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3>Name: {dentist.name}</h3>
      <p> Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Web site: {dentist.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail