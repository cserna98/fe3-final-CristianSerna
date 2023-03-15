import React from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const {theme,dentists,fav,Setfav} = GlobalContext()
  

  console.log(dentists)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          dentists.map((e)=>(<Card key={e.id} dentistInfo={e}>cards</Card>))
        }        
        {/* Aqui deberias renderizar las cards */}
        <div></div>
      </div>
    </main>
  )
}

export default Home