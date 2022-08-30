import React,{ useEffect ,useState } from 'react'
import Game from '@/components/Game'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getDiscoverData ,getmoregamesData,getthenData} from '@/store/actionCreators'
import { Amway } from '@/models/amway'
import { Sortitem } from '@/models/sortitem'
import { Testitem } from '@/models/testitem'
import { Moregames } from '@/models/Moregame'
import { Game1 } from '@/models/game1'
import { DiscoverWrapper,Top ,SortItem} from './style'
import { Swiper } from 'antd-mobile'  
import { InfiniteScroll, List } from 'antd-mobile'
import Loading from '@/components/Loading'
import { PullToRefresh } from 'antd-mobile'
import { sleep } from '@/api/utils'
import tap from '@/assets/image/tap.png'
import LazyLoad from 'react-lazyload'


interface HomeProps {
  loading: boolean;
  sort:Sortitem[];
  test:Testitem[];
  games:Moregames;
  other:Moregames[];
  amway:Amway;
  game1:Game1;
  then:any[];
  getDiscoverDataDispatch:() => void;
  getMoregameDispatch:() =>void;
  getthenDataDispatch:() => void;
}

const  Discover:React.FC<HomeProps> = (props) => {
  const { 
          sort,test,games,other,
          amway,game1,loading,then
        } = props;
        console.log(games)
        // console.log(sort,test,game,recommand)
  const { 
          getDiscoverDataDispatch,
          getthenDataDispatch 
         } = props;  
        //  安利墙数据分割
         let amways = amway.data;
        //  游戏专区数据分割
         let game1s = game1.data;
  useEffect(() => {
    getDiscoverDataDispatch()
  },[])  

  let count = 0;
  async function mockRequest() {
    if (count >= 5) {
      return []
    }
    await sleep(2000)
    count++
    getthenDataDispatch()
    return (then)
  }

  const [hasMore, setHasMore] = useState(true)
  // const [data,setData ] = useState(other)
  async function loadMore() {
    const append = await mockRequest()
    console.log(append,'111111');
    // console.log(then)
    // append.concat(other)
    other.push(...append)
    console.log(other,'0000')
    await sleep(2000)
  }
  return (
    <DiscoverWrapper> 
       <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        // setData([...getNextData(), ...data])
        getDiscoverDataDispatch()
      }}
    >
      {/* 图标分类 */}
      <div className='icon'>
      <Top>
        {
          sort.map((sortitem,index) => 
            <SortItem className='sort' key={index}> 
                <img src={sortitem.icon.url}/>
                <div className='label'>{sortitem.label}</div>
            </SortItem>
            )
        }
      </Top>
      </div> 
      {/* 预约、测试  */}
      <div className='test'>   
        {
          test.map((testitem,index) => 
            <div className='testItem' style={{backgroundColor:`${testitem.color}`}} key={index}> 
              <img src={testitem.icon.url} alt="" />
              <div className='title' style={{color:`#${testitem.font_color.slice(2)}`}} >{testitem.label}</div>
            </div>
            )
        }
      </div>
      {/* 游戏 */}
        <div className='games'>
          {
            games.map((game,index) => {
              return <Game  
                        game={game}
                        key={index}
                         />
            })
          }
        </div>
       {/* 安利墙 */}
       <div className='amway-wrapper'> 
            <div className='label'>  
                {amway.label} 
                <span>&gt;</span>
                </div> 
       <div className='amway-items'>
            { 
            amways &&  amways.map(amwayitem => {
    return( 
      <div key={amwayitem.id} className="amway-item">
          { 
          amwayitem.extended_entities.reviews.map((item,index )=> {
            return (
              <div className='reviews' key={item.index}>
                  <img src={item.app.banner.url} alt="" />
                  <div className='text'>{item.contents.text}</div>
                  <div className='title'>--{item.app.title}--</div>
              </div>
          )}
          )}
          <div className='people'>
              <img src={amwayitem.author.user.avatar} alt="" />
              <span className='name'> {amwayitem.author.user.name} </span>
              </div>
        </div>  
        )}
      )}
      </div> 
      </div> 
      {/* 游戏专题 */}
      <div className='game1-wrapper'>
            <div className='label'>  
                {game1.label} 
                <span>&gt;</span>
                </div> 
               { game1s && <Swiper  
            // trackOffset={10} 
            slideSize={80}
            // stuckAtBoundary={false}
            style={{'--height':'200px','--width':'100%'}}
            indicator={(total,current)=>(
              <div className='customIndicator indor'>
                {`${current + 1} / ${total}`}
              </div>
            )}
            >
              {
                game1s && game1s.map(game1item => 
                  
                    <Swiper.Item key={game1item.id}>
                      <div className='game1-img'>
                      <LazyLoad placeholder={<img 
                    width="100%" height="100%"
                    src={tap}/>
                    }>
                      <img src={game1item.banner.url} alt=""/>
                      </LazyLoad>
                      </div>
                      
                    </Swiper.Item>
                  )
  
              }
              </Swiper>}
      </div>
        <div className='games'>

          {
            other.map((game,index) => {
              return( 
                <Game  
                        game={game}
                        key={index}
                         />
                         )
            })
          }
       
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
        { loading ? <Loading/>:null}
        </PullToRefresh>  
    </DiscoverWrapper>
  )
}   

const mapStateToProps = (state:rootState) => ({
  sort:state.discover.sort,
  test:state.discover.test,
  games:state.discover.games,
  other:state.discover.other,
  amway:state.discover.amway,
  game1:state.discover.game1,
  then:state.discover.then,
  loading:state.loading
})   

const mapDispatchToProps = (dispatch:Dispatch) => ({
    getDiscoverDataDispatch(){
      dispatch<any>(getDiscoverData())
    },
    getMoregameDispatch(){
       dispatch<any>(getmoregamesData())
    },
    getthenDataDispatch(){
      dispatch<any>(getthenData())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Discover)
function dispatch(getthenData: () => (dispatch: Dispatch<import("redux").AnyAction>) => void) {
  throw new Error('Function not implemented.')
}

