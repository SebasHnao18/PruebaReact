import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hernandez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
/*<TiwtterFollowCard isFollowing userName="elonmusk" name = "Elon Musk"/>
<TiwtterFollowCard isFollowing userName="vxnder" name = "Vander Hart"/>*/
/*<TiwtterFollowCard  userName="midudev" initialIsFollowing>
        Miguel Angel Duran 
      </TiwtterFollowCard>
      
      <TiwtterFollowCard  userName="pheralb">
        Pablo Hernandez
      </TiwtterFollowCard>
      Comentarios
      <button onClick={()=> setName('pedromichel')}>
        Cambio nombre
      </button>*/
