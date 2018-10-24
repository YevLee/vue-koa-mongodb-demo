const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/vue-koa");

let db=mongoose.connection;
mongoose.Promise=global.Promise;
db.on("err",()=>{
	console.log("数据库连接出错")
});
db.on("open",()=>{
	console.log("数据库连接成功")
});
const userSchema=mongoose.Schema({
	userName:String,
	password:String,
	token:String,
	creat_time:Date
});
const model={
	User:mongoose.model("User",userSchema)
};
module.export=model;