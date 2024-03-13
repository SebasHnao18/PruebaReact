import { useState } from 'react'
import './App.css'
import { TiwtterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
  //const [name, setName] = useState('midudev')
  return (
    <section className='App'>
      <TiwtterFollowCard  userName="midudev" initialIsFollowing>
        Miguel Angel Duran 
      </TiwtterFollowCard>
      
      <TiwtterFollowCard  userName="pheralb">
        Pablo Hernandez
      </TiwtterFollowCard>
      {/*Comentarios
      <button onClick={()=> setName('pedromichel')}>
        Cambio nombre
      </button>*/}
    </section>

  )
}
/*<TiwtterFollowCard isFollowing userName="elonmusk" name = "Elon Musk"/>
<TiwtterFollowCard isFollowing userName="vxnder" name = "Vander Hart"/>*/
