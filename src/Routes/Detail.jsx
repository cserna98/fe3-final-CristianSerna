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
  //<tbody><tr><th><tr><tbody>
};
useEffect(()=>{
  getdentist()
},[])


  

  return (
    <>
    <table>
    <tbody>
      <tr><th>Name</th><td>{dentist.name}</td></tr>
      <tr><th>Email</th><td>{dentist.email}</td></tr>
      <tr><th>Phone</th><td>{dentist.phone}</td></tr>
      <tr><th>web site</th><td>{dentist.website}</td></tr>
      <tr></tr>
    </tbody>      
    </table>       
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail