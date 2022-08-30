import React from 'react' 
import { Link,useLocation } from 'react-router-dom'   
import { FooterWrapper } from './style'  
import classnames from 'classnames'
import { isPathPartlyExisted  } from '@/api/utils'


const Footer = () => {
  const { pathname } = useLocation();
  if(isPathPartlyExisted(pathname)) return 

  return (
    <FooterWrapper>
      <Link to='/home' className={classnames({active:pathname == '/home' || pathname =='/'})}>
        <i className="fa fa-home"></i>
        <span>首页</span>
        </Link> 
      <Link to='/discover' className={classnames({active:pathname == '/discover' })}>
        <i className="fa fa-globe"></i>
        <span>发现</span>
        </Link> 
      <Link to='/dynamic' className={classnames({active:pathname == '/dynamic' })}>
        <i className="fa fa-photo"></i>
        <span>动态</span>
        </Link>
      <Link to='/rank' className={classnames({active:pathname == '/rank' })}>
        <i className="fa fa-trophy"></i>
        <span>排行榜</span>
        </Link>
    </FooterWrapper>
  )
}

export default Footer
