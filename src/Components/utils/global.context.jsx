import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";

// Usecontext
export const ContextGlobal = createContext();
// UseReducer
export const initialState = "light" 
export const ContextProvider = ({ children }) => {

  const[theme,dispath]= useReducer((state, action)=>{
    console.log(state)      
    return    state === "light" ? "dark" : "light" ;
  },initialState)

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  useEffect(()=>{
    getdataApi()
    console.log(theme)   
  })

  async function getdataApi(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let user = await response.json();       
  };


  return (
    <ContextGlobal.Provider value={{theme,dispath}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const GlobalContext= ()=> useContext(ContextGlobal)