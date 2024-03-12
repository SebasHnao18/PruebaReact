import './App.css'
import { TiwtterFollowCard } from './TwitterFollowCard'
export function App() {

  return (
    <section className='App'>
      <TiwtterFollowCard  userName="midudev">
        Miguel Angel Duran 
      </TiwtterFollowCard>
      <TiwtterFollowCard  userName="pheralb">
        Pablo Hernandez
      </TiwtterFollowCard>  
    </section>

  )
}
/*<TiwtterFollowCard isFollowing userName="elonmusk" name = "Elon Musk"/>
<TiwtterFollowCard isFollowing userName="vxnder" name = "Vander Hart"/>*/
