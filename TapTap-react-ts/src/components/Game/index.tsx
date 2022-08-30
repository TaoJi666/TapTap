import React from 'react'
import { Moregames } from '@/models/Moregame'
import { GamesWrapper } from './style'
import { Link } from 'react-router-dom'  
import tap from '@/assets/image/tap.png'
import LazyLoad from 'react-lazyload'

//第二层map，将数据map出来  
interface GameProps {
    game:Moregames;
    // moregames:any[];
    // gameitem:Games;
}

const Game:React.FC<GameProps> = (props) => {  
    const { game } = props;
    // console.log(game)
    let moregames = game.data;
  return (
    <GamesWrapper>
        <div className='label'>  
            {game.label} 
            <span>&gt;</span>
        </div> 
        <div className='game-wrapper'>
      {  
            moregames.map( gameitem  => {
            return(  
            <div className="game-img" key={gameitem.app.id}>
            <Link to={'/games/'+( gameitem.app.id || gameitem.craft.id) }  
                            key={gameitem.app.id} 
                            >
                <LazyLoad placeholder={<img 
                    width="100%" height="100%"
                    src={tap}/>
                    }>
                <img src={gameitem.app.icon.url} alt="" />
                <div className='title'>{gameitem.app.title || gameitem.craft.title }</div>
                </LazyLoad>
            </Link>
            </div>
            )
            
            }
            )
      }
      </div>
     
    </GamesWrapper>
  )
}

export default Game
