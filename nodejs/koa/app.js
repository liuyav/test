const Koa = require('koa');
const app = new Koa();

// 路由
const Router = require('koa-router');
const router = new Router();

// 设置跨域
const cors = require('koa2-cors');
app.use(cors())

// bodyParser 解析请求参数
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 意思是：如果你访问的是 localhost:3000/api 开头的，要怎么处理，你去找 './routers/api/index.js'
router.use('/api', require('./routers/api'));

app.listen(3000, () => console.log('Running...'));

app.use(router.routes());
