const router = require('koa-router')()   
// const discoverData = require('../data/discover');
const { 
    fetchdiscover,
    fetchdiscover_then
}  = require('../api')
const gameData = require('../data/game');

router.get("/all",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = data.data.list
})  
//分类
router.get("/sort",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = data.data.list[0]
})    
//最新测试、预约
router.get("/test",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = data.data.list[1]
})  
//新游预约  和厂家力荐
router.get("/games",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = {
        data:data.data.list.slice(2,4)
    }
})  

//安利墙
router.get("/amway",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = {
        data:data.data.list[4]
    }
}) 
//游戏专题  
router.get("/game1",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = {
        data:data.data.list[5]
    }
}) 
//更多版面
router.get("/other",async (ctx) =>{
    const data = await fetchdiscover()
    ctx.body = {
        data:data.data.list.slice(7)
    }
})   
//游戏星冕  
router.get("/star",async (ctx) => {
    ctx.body = gameData
})
// 加载更多 then
router.get("/then",async (ctx) =>{
    const data = await fetchdiscover_then()
    ctx.body = {
        data:data.data.list
    }
})
module.exports = router.routes();   