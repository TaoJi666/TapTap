import { Dispatch } from 'redux'   
import * as actionTypes from './constants'  
import { 
    getdiscoversortRequest,
    getdiscovertestRequest,
    getdiscovergamesRequest,
    getdiscoverotherRequest,
    getdiscoveramwayRequest, //安利墙  
    getdiscovergame1Request, //游戏专题
    getplaceholderRequest ,
    getsearchhotwordsRequest,
    getsearchhotRequest,
    getsearchsuggestRequest,
    getresultforumRequest,
    getsearchgameRequest,
    getappRequest,
    getthenRequest
} from '@/api/request'   

// 页面级别action    
export const getplaceholder = () => {
    return (dispatch:Dispatch)=>{
        getplaceholderRequest()
            .then(data => {
                dispatch(setPlaceholder(data))
            })
    }
}

// 同步请求 搜索框内轮播 
export const setPlaceholder = (data:any) =>({
    type:actionTypes.SET_PLACEHOLDER,
    data
}) 
// loading  
export const setLoading = (data:boolean) =>({
    type:actionTypes.SET_LOADING,
    data
})  

//发现页面 数据  
export const getDiscoverData = () => {
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getdiscoversortRequest(),
            getdiscovertestRequest(),
            getdiscovergamesRequest(),
            getdiscoverotherRequest(),
            getdiscoveramwayRequest(),
            getdiscovergame1Request()

        ]).then(([sort,test,games,other,amway,game1]) => {
            dispatch(setSort(sort.data)),
            dispatch(setTest(test.data)),
            dispatch(setGames(games.data)),
            dispatch(setOther(other.data)),
            dispatch(setAmway(amway.data)),
            dispatch(setGame1(game1.data)),
            dispatch(setLoading(false))
        })
    }
}  

export const getthenData = () => {
    return (dispatch:Dispatch)=>{
        getthenRequest()
            .then(data => {
                dispatch(setThen(data.data))
            })
    }
}
export const getmoregamesData = () => {
    let count = 0
    return (dispatch:Dispatch) => {
        return Promise.all([
        getdiscovergamesRequest(),
        getdiscovergame1Request()
        ]).then(([game,game1]) => {
            dispatch(setGames(game.data)),
            dispatch(setGame1(game1.data)),
            count++;
        })
    }
} 

// 搜索页面数据   
export const getsearchData = () => {
    return (dispatch:Dispatch) => {
        return Promise.all([
            getsearchhotwordsRequest(),
            getsearchhotRequest()
        ]).then(([hotwords,hot]) => {
            console.log(hotwords.data)
            dispatch(setHotwords(hotwords.data)),
            dispatch(setHot(hot.data))
        })
    }
}  

//搜索建议数据  
export const getsuggestData = (query:any) =>{
    return (dispatch:Dispatch) =>{
        getsearchsuggestRequest(query)
            .then(data => {
                if(!data) return;
                let res = data.data || [];
                console.log(res);
                dispatch(setSuggest(res))
            })
    }
}
//搜索结果 结果游戏
export const getsearchresultData = (query:any) =>{
    return (dispatch:Dispatch) =>{
        dispatch(setLoading(true))
        return Promise.all([
        getsearchsuggestRequest(query),
        getsearchgameRequest(query),
        getresultforumRequest(query)
        ]).then(([result,result_game,forum]) => {
                let res1 = result_game.data || [];
                let res = result.data || [];
                dispatch(setResultsuggest(res))
                dispatch(setResultgame(res1))
                dispatch(setResultforum(forum.data))
                dispatch(setLoading(false))
            })
    }
}

//搜索结果游戏 
// export const getresultgameData = (query:any) =>{
//     return (dispatch:Dispatch) =>{
//         getsearchgameRequest(query)
//             .then(data => {
//                 if(!data) return;
//                 let res = data.data || [];
//                 dispatch(setResultgame(res))
//             })
//     }
// }  

//游戏星冕数据 
export const getStarData = (id:number)=>{
    return (dispatch:Dispatch) =>{
        getappRequest(id)  
            .then( data =>{
                dispatch(setStarapp(data.data))
            })
    }
}
//分类
export const setSort = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_SORT,
    data
}) 
// 最新测试，预约
export const setTest = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_TEST,
    data
})  
//游戏
export const setGames = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_GAMES,
    data
})  
//大厂力荐
export const setOther = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_OTHER,
    data
}) 
// 安利墙  
export const setAmway = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_AMWAY,
    data
})  
// 游戏专题  
export const setGame1 = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_GAME1,
    data
}) 
// 搜索发现  
export const setHotwords = (data:any[]) =>({
    type:actionTypes.SET_SEARCH_HOTWORDS,
    data
})
// 热搜  
export const setHot = (data:any[]) =>({
    type:actionTypes.SET_SEARCH_HOT,
    data
}) 
// 搜索推荐  
export const setSuggest = (data:any[]) => ({
    type:actionTypes.SET_SEARCH_SUGGEST,
    data
})
//搜索结果
export const setResultsuggest = (data:any[]) => ({
    type:actionTypes.SET_SEARCH_RESULT,
    data
})
//搜索结果游戏
export const setResultgame= (data:any[]) => ({
    type:actionTypes.SET_RESULT_GAME,
    data
})
// 结果论坛
export const setResultforum = (data:any[]) => ({
    type:actionTypes.SET_RESULT_FORUM,
    data
})
//游戏星冕  
export const setStarapp = (data:any[]) =>({
    type:actionTypes.SET_STAR_APP,
    data
})
export const setThen = (data:any[]) => ({
    type:actionTypes.SET_DISCOVER_THEN,
    data
})