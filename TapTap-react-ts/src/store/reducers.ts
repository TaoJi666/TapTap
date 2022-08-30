import { combineReducers,AnyAction  } from "redux";  
import * as actionTypes from './constants'   
 

const initalState = {
    loading:true,
    placeholder:[],
    discover:{
        sort:[],
        test:[],
        games:[],
        other:[],
        amway:[],
        game1:[],
        then:[]
    },
    search :{
        hotwords:[],
        hot:[],
        history:[],
        suggest:[],
        result:[],
        result_game:[],
        forum:[]
    },
    star:{
        app:[]
    }
}  

const loadingReducer = (state = initalState.loading,
    action:AnyAction) => {
switch(action.type) {
   case actionTypes.SET_LOADING:
       return action.data
   default:
       return state
}
}
//轮播文字
const placeReducer = (state = initalState.placeholder,action:AnyAction) => {
    switch(action.type){
        case actionTypes.SET_PLACEHOLDER:
            return action.data
            break;
        default:
            return state 
    }
}  

// 发现页面   

const discoverReducer = (state = initalState.discover,action:AnyAction) => {
    switch(action.type){
        case actionTypes.SET_DISCOVER_SORT:
            return {
                ...state,
                sort:action.data
            }
            break;
        case actionTypes.SET_DISCOVER_TEST:
            return {
                ...state,
                test:action.data
            }
                break;  
        case actionTypes.SET_DISCOVER_GAMES:
            return {
                ...state,
                games:action.data
            }
            break; 
        case actionTypes.SET_DISCOVER_OTHER:
            return {
                ...state,
                other:action.data
            }
            break; 
        case actionTypes.SET_DISCOVER_AMWAY:
            return {
                ...state,
                amway:action.data
                }
            break; 
        case actionTypes.SET_DISCOVER_GAME1:
            return {
                ...state,
                game1:action.data
            }
                break; 
        case actionTypes.SET_DISCOVER_THEN: //加载更多  
            return {
                ...state,
             then:action.data
                }
        default:
            return state; 
        
    }
}  
// 搜索页面   
const searchReducer = (state = initalState.search,action:AnyAction) =>{
    switch(action.type){
        case actionTypes.SET_SEARCH_HOTWORDS:
            return {
                ...state,
                hotwords:action.data
            }
            break;
        case actionTypes.SET_SEARCH_HOT:
            return {
                    ...state,
                    hot:action.data
                }
                break;
        case actionTypes.SET_SEARCH_HISTORY:
                return {
                    ...state,
                    history:action.data
                }
                    break;
        case actionTypes.SET_SEARCH_SUGGEST:
            return {
                ...state,
                suggest:action.data
            }
        case actionTypes.SET_SEARCH_RESULT://结果页面 
            return {
                ...state,
                result:action.data
            }
        case actionTypes.SET_RESULT_GAME: //结果游戏
            return {
                ...state,
                result_game:action.data
            }
        case actionTypes.SET_RESULT_FORUM: //结果游戏
            return {
            ...state,
            forum:action.data
            }
        default:
            return state;
    }
}

//游戏详情  
const starReducer = ( state = initalState.star,action:AnyAction) =>{
    switch(action.type) {
        case actionTypes.SET_STAR_APP:
            return {
                ...state,
                app:action.data
                }
                break; 
        default:
            return state;
    }
}

export default combineReducers({
    loading:loadingReducer,
    placeholder:placeReducer,
    discover:discoverReducer,
    search:searchReducer,
    star:starReducer
})