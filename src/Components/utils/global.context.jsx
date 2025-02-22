import { useContext,useEffect,useReducer,createContext, useState} from "react";






// Usecontext
export const ContextGlobal = createContext();
export const initialState = "light" 

export const ContextProvider = ({children}) => {
  // usereducer para cambiar el valor del tema
  const[theme,dispath]= useReducer((state, action)=>{
    console.log(state)      
    return    state === "light" ? "dark" : "light" ;
  },initialState)  

  // useEffect para cargar la funcion asincronica que trae los datos de la api
  useEffect(()=>{
    getdataApi()
    console.log(theme)   
  },[])
  // usestate para guardar la api en un estado.
  const [dentists,setUser] = useState([])
  const [change, setchenge] = useState(false)
  // funcion asincronica que trae datos de la api
  async function getdataApi(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dentists = await response.json();
    setUser(dentists)       
  };
// local storage para favoritos

const [fav,Setfav] = useState([])

useEffect(()=>{
  console.log("cambio el local socio")
  const storedItems = Object.keys(localStorage).map((key) => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      console.error(`Error al analizar el objeto JSON con clave ${key}:`, e);
      return null;
    }
  }).filter((item) => item !== null);
  Setfav(storedItems)
},[change])


  return (
    <ContextGlobal.Provider value={{theme,dispath,dentists,fav,Setfav,change, setchenge}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const GlobalContext= ()=> useContext(ContextGlobal)