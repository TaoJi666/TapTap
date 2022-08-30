const router = require('koa-router')()   
// const searchData = require('../data/search') 
const { 
    fetchsearchsuggest,
    fetchsearchresultgame,
    fetchsearchresult,
    fetchsearch
}  = require('../api')

router.get("/hotwords",async (ctx) =>{
    const data = await fetchsearch()
    console.log(data.data.data[0])
    ctx.body = data.data.data[0]
    
}) 
router.get("/hot",async (ctx) =>{
    const data = await fetchsearch()
    console.log(data.data.data[1])
    ctx.body = data.data.data[1]
})  
router.get("/all",async (ctx) =>{
    ctx.body = searchData

}) 
router.get("/suggest",async (ctx,next) =>{
    const w = encodeURI(ctx.query.w);  //编码？  中文转义
    // ctx.query 请求对象中的查询参数   
    // ?a = 1&b=2 查询参数 设置（a:1，b:2）
    // ctx.body = w;
    console.log(w, '------------')
    try{
        const data = await fetchsearchsuggest(w) 
        console.log(data);   
        ctx.body = data
    } catch(e) {
        // 处理错误  
        next(e)
    } 
})
// 结果
router.get("/result",async (ctx,next) =>{
    const w = encodeURI(ctx.query.w);  //编码？  中文转义
    // ctx.query 请求对象中的查询参数   
    // ?a = 1&b=2 查询参数 设置（a:1，b:2）
    // ctx.body = w;
    console.log(w, '------------')
    try{
        const data = await fetchsearchresult(w)   
        console.log(data);   
        ctx.body = data
    } catch(e) {
        // 处理错误  
        next(e)
    } 
})
// 游戏
router.get("/game",async (ctx,next) =>{
    const w = encodeURI(ctx.query.w);  //编码？  中文转义
    // ctx.query 请求对象中的查询参数   
    // ?a = 1&b=2 查询参数 设置（a:1，b:2）
    // ctx.body = w;
    console.log(w, '------------')
    try{
        const data = await fetchsearchresultgame(w)  
        console.log(data);   
        ctx.body = data
    } catch(e) {
        // 处理错误  
        next(e)
    } 
})

router.get("/ww",async(ctx,next) => {
    const data = await fetchsearch()
    ctx.body = data
})
module.exports = router.routes();   