import { axiosInstance  } from "./config";   
import {
    URL_PLACEHOLDER,
    URL_DISCOVER_SORT,
    URL_DISCOVER_TEST,
    URL_DISCOVER_GAMES,
    URL_DISCOVER_OTHER,
    URL_DISCOVER_AMWAY,
    URL_DISCOVER_GAME1,
    URL_SEARCH_HOTWORDS,
    URL_SEARCH_HOT,
    URL_SEARCH_SUGGEST,
    URL_RESULT,
    URL_RESULT_GAME,
    URL_APP,
    URL_DISCOVER_THEN
} from './url'   
//文字轮播
export const getplaceholderRequest = 
    () => axiosInstance.get(URL_PLACEHOLDER)  

export const getdiscoversortRequest = 
    () => axiosInstance.get(URL_DISCOVER_SORT)  

export const getdiscovertestRequest = 
    () => axiosInstance.get(URL_DISCOVER_TEST)

export const getdiscovergamesRequest = 
    () => axiosInstance.get(URL_DISCOVER_GAMES)

export const getdiscoverotherRequest = 
    () => axiosInstance.get(URL_DISCOVER_OTHER)   

export const getdiscoveramwayRequest = 
    () => axiosInstance.get(URL_DISCOVER_AMWAY)  

export const getdiscovergame1Request = 
    () => axiosInstance.get(URL_DISCOVER_GAME1)
// 搜索页面   
export const getsearchhotwordsRequest = 
    () => axiosInstance.get(URL_SEARCH_HOTWORDS)  
//搜索热搜
export const getsearchhotRequest = 
    () => axiosInstance.get(URL_SEARCH_HOT)
//搜索推荐  
export const getsearchsuggestRequest = 
    (query:any) => axiosInstance.get(`${URL_SEARCH_SUGGEST}?w=${query}`);  

//搜索结果  
export const getresultforumRequest = 
    (query:any) => axiosInstance.get(`${URL_RESULT}?w=${query}`);
// 搜索结果游戏  
export const getsearchgameRequest = 
    (query:any) => axiosInstance.get(`${URL_RESULT_GAME}?w=${query}`);
// 游戏详情 
export const getappRequest = 
    ( id:number ) => axiosInstance.get(`${URL_APP}?w=${id}`);
// 加载更多游戏  
export const getthenRequest = 
    () => axiosInstance.get(URL_DISCOVER_THEN)
