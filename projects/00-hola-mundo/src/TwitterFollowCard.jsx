import {useState} from 'react'
export function TiwtterFollowCard({children,userName}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text  = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followcard-button is-following' 
        : 'tw-followcard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }  

    return(
        <article className='tw-followcard'>
          <header className='tw-followcard-header'>
              <img
              className='tw-followcard-avatar'  
              alt="El avatar de midudev" 
              src={`https://unavatar.io/${userName}`}></img>
              <div className='tw-followcard-info'>
                  <strong>{children}</strong>
                  <span className='tw-followcard-infoUserName'>@{userName}</span>
              </div>
          </header>
          <aside>
              <button className={buttonClassName} onClick={handleClick}>
                  {text}
              </button>
          </aside>
      </article>
    )
}