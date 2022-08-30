import React,{ useState ,useRef ,useEffect,useMemo} from 'react'
import { useNavigate ,Link, Outlet} from 'react-router-dom'
import { SearchWrapper ,SearchHotwords,SearchMain,SearchHot} from './style'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getsearchData,getsuggestData } from '@/store/actionCreators'
import SearchBox from './SearchBox'
import { Hotwords } from '@/models/hotwords'
import { Suggest } from '@/models/suggest'
import { Hot } from '@/models/hot'  
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import { Tabs } from 'antd-mobile'

interface SearchProps {
  hotwords:Hotwords;
  hot:Hot;
  history:any[];
  suggest:Suggest;
  getSearchDataDispatch:()=>void;
  getSuggestDispatch:(query:any)=>void;
}

const Search:React.FC<SearchProps> = (props) => {  
  const {
    hotwords,
    hot,
    history,
    suggest
  } = props 
  console.log(suggest,'====')
  console.log(hot,'.....')

  const { 
    getSearchDataDispatch,
    getSuggestDispatch
  } = props
  const navigate = useNavigate()
  const [query,setQuery] = useState('');
  // const [show,setShow] = useState(false);
  const [tab,setTab] = useState('game')

  useEffect(() =>{
    getSearchDataDispatch()
  },[])

  const handleQuery = (q:any) =>{
    setQuery(q);
    console.log(query,'/////');
      getSuggestDispatch(q);
  }

  // useEffect(() => {
  //   if(query.trim()) {
  //     getSuggestDispatch(query);
  //   }
  // },[query])
  const renderarr =(arr:any)=>{
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
  const displayStyle = query ? {display: 'none'}: {display: 'block'};
  const displayStyle1 = query ? {display: 'block'}: {display: 'none'};
  // index 样式   
  const renderstyle = (index:number) =>{
    if(index < 3){
      return { color:'#15c5ce'}
    }

  }
  return (
    <SearchWrapper>
     <SearchBox    
      newQuery={query}
      handleQuery={handleQuery}
     />
     <SearchMain  style={displayStyle}>
     <SearchHotwords>
      {
        hotwords && hotwords.map((word,index)=>{
          return (
            <div className='hotwords'>
            <div className='top' key={index}> 
            <span>{word.title}</span> 
            <span onClick={renderarr(word.list)}>换一换 &nbsp;<i className="fa fa-circle-o-notch" ></i></span>
              </div>
           { 
           word.list &&  word.list.map((item: { keyword: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined },index1: React.Key | null | undefined)=>{
            return (
              <Link to={`/search/${item.keyword}`}>
              <a href="#" key={index1} className="word">{item.keyword}</a>
              </Link>
            )
           })
           
          }
          </div>
          )
        })
      }
     </SearchHotwords> 
     <div className='nav'>
        <div><a href="#0" className={tab=="game"?"active":""} onClick={()=> setTab("game")}>Tap游戏热搜</a></div> 
        <div><a href="#1" className={tab=="content"?"active":""} onClick={()=>setTab("content")} >Tap内容热搜</a></div>
      </div>
     <SearchHot>
      {/* 热搜词汇 */}
      {
        hot  && hot.map((hotitem,index) => {
          return (
           
            <div key={index}>
               {/* <Swiper
            spaceBetween={40}
            slidesPerView={1.13}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            key ={index}
            pagination={true} modules={[Pagination]}
    > */}
              {/* <div className='title'>Tap{hotitem.title}</div> */}
              {/* <SwiperSlide> */}
              <div className='hots' id={`${index}`}>
             { 
                hotitem.list &&  hotitem.list.map((item1: { keyword: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; icon: { url: string | undefined } | undefined; trend_icon: { url: string | undefined } | undefined },index: React.Key | null | undefined)=>{
                  return (
                    <div>   
                      <Link to={`/search/${item1.keyword}`}> 
                      <div className='hotitem' key={index} >
                        <span className='index' style={renderstyle(index)}>{index+1}</span>
                        <span className='key'>{item1.keyword}</span>
                       {/* { console.log(`${item1.icon.url}`)} */}
                      { item1.icon !== undefined ? <span><img src={item1.icon.url} alt="" /></span> : null }
                      { item1.trend_icon !== undefined ? <span><img src={item1.trend_icon.url} alt="" /></span> : null }
                      </div>
                      </Link>
                    </div>
                  )
                })         
             }
             </div>
             {/* </SwiperSlide>  yhyhy
             </Swiper> */}
            </div>

             )
        })
      }
     </SearchHot>
     {/* 搜索关键词 */}
     </SearchMain>
     <SearchMain style={displayStyle1}>
      {
        suggest&& suggest.map((item,index) => {
          return (
            <Link to={`/search/${item.game_name}`}>
            <div key={index} className="search-hot">
              <span><i className="icon-search"></i></span>
              {item.game_name}
            </div>
            </Link>
          )
        })
      }
     </SearchMain>
     {/* <Outlet/> */}
    </SearchWrapper>

  )
}

const mapStateToProps =( state:rootState) =>({
      hotwords:state.search.hotwords,
      hot:state.search.hot,
      suggest:state.search.suggest,
      history:state.search.history
})  

const mapDispatchToProps = (dispatch:Dispatch) =>({
    getSearchDataDispatch(){
      dispatch<any>(getsearchData())
    },
    getSuggestDispatch(query:any){
      dispatch<any>(getsuggestData(query))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)
