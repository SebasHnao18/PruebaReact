import { useState } from 'react'
import './App.css'
import { TiwtterFollowCard } from './TwitterFollowCard.jsx'
//Usando arreglos
const users =[
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas Chein',
    isFollowing: false
  }
]
export function App() {
  //const [name, setName] = useState('midudev')
  return (
    <section className='App'>
      {
        users.map(users => {
          const {userName,name,isFollowing} = user
          return(
            <TiwtterFollowCard
              key={userName} 
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TiwtterFollowCard>
          )
        })
      }


      
      {/*<TiwtterFollowCard  userName="midudev" initialIsFollowing>
        Miguel Angel Duran 
      </TiwtterFollowCard>
      
      <TiwtterFollowCard  userName="pheralb">
        Pablo Hernandez
      </TiwtterFollowCard>
      Comentarios
      <button onClick={()=> setName('pedromichel')}>
        Cambio nombre
      </button>*/}
    </section>

  )
}
/*<TiwtterFollowCard isFollowing userName="elonmusk" name = "Elon Musk"/>
<TiwtterFollowCard isFollowing userName="vxnder" name = "Vander Hart"/>*/
