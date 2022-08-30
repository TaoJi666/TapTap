import React, { useEffect,useRef ,useState} from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getsearchresultData } from '@/store/actionCreators'
import { SearchBoxWrapper } from '../SearchBox/style'
import { Wrapper , ResultMain } from './style'
import { Result_game } from '@/models/result_game'
import { Forum } from '@/models/forum'
import Loading from '@/components/Loading'
import { Rate } from 'antd-mobile'
import { forceCheck } from 'react-lazyload'
import Scroll from '@/components/Scroll'
import Lazyload from 'react-lazyload'
import tap from '@/assets/image/tap.png'


interface ResultProps {
    result:Result_game;
    result_game:Result_game;
    getResultDispatch:(data:any) =>void;
    loading:boolean;
    forum:Forum;
}

const Searchresult:React.FC<ResultProps> = (props) => { 
    const queryRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate(); 
    const { pathname } = useLocation()
    let pathRes = decodeURI(pathname.split('/')[2])
    console.log( decodeURI(pathRes),'HJJNNNN')
    const [query,setQuery] = useState('');

    const {
        result,
        result_game,
        loading,
        forum
    } = props  
    const { getResultDispatch } = props;

    useEffect(() =>{
        getResultDispatch(pathRes);
       let curquery =  queryRef.current ?  queryRef.current.value = pathRes : null;
        setQuery(curquery ? curquery: '')
    },[])
    console.log(result)
    console.log(result_game)
    console.log(forum.list)
  return (
    <Wrapper>
    <SearchBoxWrapper>
      <span>
          <i className='fa fa-angle-left' onClick={() =>navigate(-1)}></i>
        </span>
        <span><i className="icon-search"></i></span>
        <input type="text"  className='box' ref={queryRef} />
      {/* <span><i className="fa fa-close"  ></i></span> */}
    </SearchBoxWrapper>
    <ResultMain>
    <Scroll className="list" onScroll={forceCheck}>
        {/* 游戏页面渲染 */}
        <div className='game'> 相关游戏</div>
        {
            result_game.list && result_game.list.map((item,index) =>{
                return(
                    <div key={index} className="item">
                        <Lazyload placeholder={<img 
                    width="100%" height="100%"
                    src={tap}/>
                    }>
                        <span className='icon'><img src={item.icon} alt=""  /></span>
                        </Lazyload>
                        <span className='detail'>
                            <div className="title">{item.game_name}{item.title}</div>
                            <span>评分：
                                <Rate readOnly allowHalf value={item.grade/2} style={{
                            '--star-size': '15px',
                            '--active-color': '#15c5ce',
                          }} />{item.grade}</span>
                            <div>
                                {item.tag_list && item.tag_list.map((item1: { tag_id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined })=>{
                                    return (
                                        <span key={item1.tag_id} className="name">{item1.name}</span>
                                    )
                                })}
                            </div>
                        </span>
                        <div className='look'>查看</div>
                    </div>
                )
            })
        }
        {
            result && result.map((item,index) =>{
                return(
                    <div key={index} className="item">
                        <Lazyload placeholder={<img 
                    width="100%" height="100%"
                    src={tap}/>
                    }>
                        <span className='icon'><img src={item.icon} alt="" /></span>
                       </Lazyload>
                        <span className='detail'>
                            <div className="title">{item.game_name}{item.title}</div>
                            <span>评分：
                            <Rate readOnly allowHalf value={item.grade/2} style={{
                            '--star-size': '15px',
                            '--active-color': '#15c5ce',
                          }} />{item.grade}</span>
                            <div>
                                {item.tag_list && item.tag_list.map((item1: { tag_id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined })=>{
                                    return (
                                        <span key={item1.tag_id} className="name">{item1.name}</span>
                                    )
                                })}
                            </div>
                        </span>
                        <div className='look'>查看</div>
                    </div>
                )
            })
        }
{/* 论坛攻略渲染 */}
        <>
        <div className='game'> 论坛攻略</div>
        {
            forum.list && forum.list.map((item) =>{
                return(
                <div key={item.article_id} className="forums">
                    <div className='user'>
                        <span><img src={item.user_avatar} alt="" /></span>
                        <span className='name'>{item.user_name}</span>
                    </div>
                    <div className='title'>{item.article_title}</div>
                    <Lazyload placeholder={<img 
                    width="100%" height="100%"
                    src={tap}/>
                    }>
                    <img src={item.cover_image} alt="" />
                    </Lazyload>
                    <p>{item.strategy_summary}</p>
                    <div className='forum-zhu'>
                        <span>{item.strategy_category_name}·{item.game_name}</span>
                        <span><i className="fa fa-eye" aria-hidden="true"/>{item.view_count}</span>
                        <span><i className="fa fa-thumbs-up" aria-hidden="true"/>{item.up_count}</span>
                    </div>
                </div>
            )})
        }
        </>
            <span style={{textAlign:'center'}}>(〜￣△￣)〜已经没有更多内容啦！</span>
            </Scroll>
    </ResultMain>
    { loading ? <Loading/>:null}
    </Wrapper>
  )
}

const mapStateToProps =( state:rootState) =>({
    result:state.search.result,
    result_game:state.search.result_game,
    loading:state.loading,
    forum:state.search.forum
})  

const mapDispatchToProps = (dispatch:Dispatch) =>({
  getResultDispatch(data:any){
    dispatch<any>(getsearchresultData(data))
  }
//   getResultgameDispatch(data:any){
//     dispatch<any>(getresultgameData(data))
//   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchresult)
