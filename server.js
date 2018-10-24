const Koa = require("koa");
const app=new Koa();
const Router=require("koa-router");
const router=new Router();
const bodyParser=require("koa-bodyparser");
app.use(bodyParser());
//引入数据库操作方法
const UserController=require("./server/controller/user.js");
//const checkToken=require("./server/token/checkToken.js");

const loginRouter=new Router();
loginRouter.post("/login",UserController.Login);

const registerRouter=new Router();
registerRouter.post("/register",UserController.Reg);

//const userRouter= new Router();
//userRouter.get("/user",checkToken,UserController.GetAllUsers);

//const delUserRouter=new Router();
//delUserRouter.post("/delUser",checkToken,UserController.DelUser);

router.use("/api",loginRouter.routes(),loginRouter.allowedMethods())
router.use("/api",registerRouter.routes(),registerRouter.allowedMethods())
router.use("/api",userRouter.routes(),userRouter.allowedMethods())
router.use("/api",delUserRouter.routes(),delUserRouter.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.list(8888,()=>{
	console.log("listen localhost:8888")
})

