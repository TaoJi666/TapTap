import { useState ,useEffect,Suspense} from 'react'
import { GlobalStyle } from './style'
import Routes from '@/routes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getplaceholder } from '@/store/actionCreators'
import { Placeholder } from '@/models/placeholder'

interface AppProps {
  placeholder:Placeholder[];
  getplaceholder:()=> void;
  getplaceholderDispatch:() => void;
}

const  App:React.FC<AppProps> = (props) => {
  const { placeholder 
  } = props;

const { 
  getplaceholderDispatch
   } = props;  
useEffect(() => {
    getplaceholderDispatch()
},[])
  return (
    <div >
          <Header 
              placeholder={placeholder}
              />  
      <GlobalStyle/>
      <Suspense fallback={<div>loading...</div>}>
      <Routes/>
      </Suspense>
      {/* <img src="https://img.tapimg.com/market/images/71d9838b0254f4a4646a14823a53005a.png"/> */}
      {/* <video src="https://video5.tapimg.com/xd-hls/v5/FoLLxD4rjmyKf9rVP-J94wN4fPQn.ts?sign=deb321a491d29b45b7c42249cdc7e5c5&t=62e43eb5"></video> */}
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state:rootState) => ({
  placeholder:state.placeholder,
})   

const mapDispatchToProps = (dispatch:Dispatch) => ({
    getplaceholderDispatch(){
      dispatch<any>(getplaceholder())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
