const fetch = require('node-fetch');  

// 搜索框切换关键词   
const URL_SEARCH_KEY ="https://api.taptapdada.com/app-search/v2/placeholder?X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12"

// 发现页面数据 
const URL_DISCOVER = "https://api.taptapdada.com/gate/v3/rec1?limit=5&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12&from=0"
const URL_DISCOVER_THEN = "https://api.taptapdada.com/gate/v3/rec1?limit=5&session_id=3d25364e-b70f-41b5-9d88-19b5d0d0ffff&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12&from=5"
// 搜索推荐   
const URL_SEARCH_SUGGEST ="https://line3-h5-mobile-api.biligame.com/game/center/h5/search/game_name"

//搜索推荐
const fetchsearchsuggest = (w) => {
    const params = [
        `keyword=${w}`,
        "request_id=j4J3C3mYtfvT1tzxylugteTccQnC9ukf",
        "device_id=","build=","source_from=0",
        "from_game=0","cur_host=app(H5-IOS)","client=h5",
        "sdk_type=2"
    ]
    console.log(URL_SEARCH_SUGGEST + "?" + params.join("&"),'-------')
    return fetch(URL_SEARCH_SUGGEST + "?" + params.join("&")) 
    //    return fetch(URL_SEARCH_KEY)
        .then(res => res.json())  
        .then(json => json)
}

// 搜索结果游戏   
const URL_RESULT_GAME = "https://line3-h5-mobile-api.biligame.com/game/center/h5/search/page"
const fetchsearchresultgame = (w) => {
    const params = [
        `keyword=${w}`,
        "page_num=1",
        "page_size=20","request_id=9Um3RN4AETm0SgjcDQuGznA2e8d5Ah3T","device_id=",
        "build=","source_from=0","from_game=0",
        "cur_host=app(H5-IOS)","client=h5","sdk_type=2",
        "page_id=search","btn_id=track-search-nav",
        "real_url=https:%2F%2Fapp.biligame.com%2Fsearch%3FsourceFrom%3D0%26fromgame%3D%26isTeenager%3Dfalse%26gameThemeMode%3D0%26_ts%3D1659840106207%26referrer%3Dhttps%253A%252F%252Fapp.biligame.com%252F%26keyword%3D%25E5%25B8%259D%25E5%259B%25BD%25E7%25A5%259E%25E8%25AF%259D"
    ]
    console.log(URL_RESULT_GAME + "?" + params.join("&"))
    return fetch(URL_RESULT_GAME + "?" + params.join("&")) 
    //    return fetch(URL_SEARCH_KEY)
        .then(res => res.json())  
        .then(json => json)
}  
// 搜索结果论坛  
const URL_RESULT = "https://line3-h5-mobile-api.biligame.com/game/center/h5/search/strategy/article/page"

const fetchsearchresult = (w) => {
    const params = [
        `keyword=${w}`,
        "page_num=1",
        "page_size=20",
        "request_id=x9LE2rcBmhiQvH2Se1hig3iwkeMaUGYA",
        "device_id=",
        "build=","source_from=0","from_game=0",
        "cur_host=app(H5-IOS)","client=h5","sdk_type=2",
        "page_id=search","btn_id=track-search-nav",
        "real_url=https:%2F%2Fapp.biligame.com%2Fsearch%3FsourceFrom%3D0%26fromgame%3D%26isTeenager%3Dfalse%26gameThemeMode%3D0%26_ts%3D1659958496517%26referrer%3Dhttps%253A%252F%252Fapp.biligame.com%252F%26keyword%3D%25E5%2585%25A8%25E9%259D%25A2%25E6%2588%2598%25E4%25BA%2589%25EF%25BC%259A%25E4%25B8%2589%25E5%259B%25BD"
    ]
    console.log(URL_RESULT + "?" + params.join("&"))
    return fetch(URL_RESULT + "?" + params.join("&")) 
    //    return fetch(URL_SEARCH_KEY)
        .then(res => res.json())  
        .then(json => json)
}

//搜索建议
// const URL_SEARCH_SUGGEST = "https://www.taptap.com/webapiv2/mix-search/v1/suggest-by-keyword"
// const fetchsearchsuggest = (w) => {
//     const params = [
//         `kw=${w}&X-UA=V`,
//         "3D1","26PN",
//         "3DWebApp","26LANG","3Dzh_CN",
//         "26VN_CODE","3D83","26VN",
//         "3D0.1.0","26LOC","3DCN",
//         "26PLT","3DiOS","26DS",
//         "3DiOS","26UID",
//         "3D2e31ae13-784e-4c20-8147-34ff65674cf7"
//     ]
//     console.log(URL_SEARCH_SUGGEST + "?" + params.join("%"))
//     return fetch(URL_SEARCH_SUGGEST + "?" + params.join("%"),{
//         headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
    
//     }) 
//         .then(res => res.json())  
//         .then(json => json)
// }
const fetchsearchkey = () => {
    return fetch(URL_SEARCH_KEY) 
    .then(res => res.json())  
    .then(json => json)
}
// 发现页面数据  
const fetchdiscover = () =>{
    return fetch(URL_DISCOVER) 
        .then(res => res.json())  
        .then(json => json)
}  
const  fetchdiscover_then =() => {
    return fetch(URL_DISCOVER_THEN)
        .then(res => res.json())
        .then(json => json)
}
// 搜索页面数据
const fetchsearch = () =>{
    return fetch('https://api.taptapdada.com/search/v3/intro-by-device?refresh=false&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12')
    .then(data => data.json())
    .then(data => data)
}
// 游戏详情 
const URL_APP_ALL ='https://api.taptapdada.com/app/v1/whats-new'

const fetchappdetail = (w) => {
    const params = [
        `app_id=${w}&X-UA=V`,
        "3D1","26PN","3DTapTap",
        "26VN_CODE","3D231013000",
        "26LOC","3DCN","26LANG",
        "3Dzh_CN","26CH","3Ddefault",
        "26UID","3D7182fed0-4b82-468d-9715-9535d1c0c7b4",
        "26NT","3D1","26SR","3D1080x2265",
        "26DEB","3DXiaomi","26DEM",
        "3DM2007J17C","26OSV","3D12"
    ]
    console.log(URL_APP_ALL + "?" + params.join("%"))
    return fetch(URL_APP_ALL + "?" + params.join("%")) 
        .then(res => res.json())  
        .then(json => json)
}

module.exports = {
    fetchsearchkey,
    fetchdiscover,
    fetchdiscover_then,
    fetchsearchsuggest,
    fetchsearchresultgame,
    fetchsearchresult,
    fetchsearch,
    fetchappdetail
}