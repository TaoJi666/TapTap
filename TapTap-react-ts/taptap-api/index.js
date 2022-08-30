// 后端单点入口文件  
const Koa = require('koa')  //启动http server 
const router = require('koa-router')() //koa 路由中间件
const cors = require('koa-cors');
const mainRouter = require('./routers/index')
const discoverRouter = require('./routers/discover')
const searchRouter = require('./routers/search')

const app = new Koa();
// 中间件函数   
app.use(cors());   
app.use(mainRouter);
router.use('/discover',discoverRouter);
router.use('/search',searchRouter);
app.use(router.routes());

app.use((ctx) => {
    ctx.body = 'hello world'
})  

app.listen(3500)