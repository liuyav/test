const Router = require('koa-router');

const router = new Router();

const Users = require('../../db')

// 这里就是 localhost:3000/admin
router.get('/user', async ctx => {
  ctx.set("Content-Type", "application/json")
  ctx.body = {a: 1};
});

router.post('/login', async ctx => {
  ctx.set("Content-Type", "application/json")

  const username = await ctx.request.body.name;
  const sex = await ctx.request.body.sex;

  let responseText = {};

  await Users.exists({name: username}).then(exists=> {
    if (exists) {
      responseText = {
        code: -1,
        message: "用户名已存在"
      }
      return;
    } 
      
    responseText = {
      code: 0,
      message: "操作成功"
    }
    Users.insertMany([{name: username, sex: sex}])
  })

  ctx.body = responseText
});

// 还可以继续分
// 意思是：如果你访问的是 localhost:3000/admin 开头的，你已经找到我了
// 但是，如果后面跟的是 /login，那你还得继续找 './login/login.js' 至于怎么处理，它说了算
//router.use('/login', require('./login/login')); // 这里就是 localhost:3000/admin/login

module.exports = router.routes();
