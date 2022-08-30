import React,{ useEffect } from 'react'
import { Link ,useLocation} from 'react-router-dom'  
import { HeaderWrapper } from './style'
import people from '@/assets/image/people.png'
import { Placeholder  } from '@/models/placeholder' 
import { Swiper } from 'antd-mobile'
import { isPathPartlyExisted  } from '@/api/utils'

interface PlaceProps {
  placeholder:Placeholder[];
}

 const  Header:React.FC<PlaceProps> = (props) =>{ 
  const { pathname } = useLocation();
  if(isPathPartlyExisted(pathname)) return 
  const {
    placeholder
  } = props  
  // console.log(placeholder)  
  // if(['/search'].indexOf(pathname) != -1 ) return 
  return (
    <HeaderWrapper>
         <Link to="/search" className="search-icon">
          <i className="icon-search"></i>
        </Link>
        <Link to="/search" >
        <ul>
    {placeholder &&  <Swiper  
            direction='vertical'
            trackOffset={100} 
            // slideSize={1}
            // stuckAtBoundary={false}
            style={{'--height':'30px','--width':'90%'}}
            autoplay={true} 
            loop={true}
            indicator={()=>(1)}
            >
         {
         placeholder.map(
            (place,index) => 
            <Swiper.Item key ={index}>
      <li  key ={index}>{place.keyword}</li>
      </Swiper.Item>
    )}
        </Swiper> }
        </ul>
        </Link>
      <Link to="/space">
        <span  className="avatar">
        <img src={people} alt="" />
        </span>
      </Link>
    </HeaderWrapper>
  )
}  

export default Header
