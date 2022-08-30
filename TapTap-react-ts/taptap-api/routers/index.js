const router = require('koa-router')();
// const placeholderData = require('../data/placeholder')
const { 
    fetchsearchkey,
    fetchappdetail
}  = require('../api')


router.get("/placeholder",async (ctx) =>{  
    const data = await   fetchsearchkey();
        ctx.body = data.data.list
       
})

//游戏详情  
router.get("/app",async (ctx,next) =>{
    const w = ctx.query.w;  
    console.log(w, '------------')
    try{
        const data = await fetchappdetail(w) 
        console.log(data);   
        ctx.body = data
    } catch(e) {
        // 处理错误  
        next(e)
    } 
})
module.exports = router.routes();