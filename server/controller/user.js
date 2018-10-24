const User=require("../dbconfig.js").User;
const moment = require("moment");
const objectIdToTimestamp=require("objectid-to-timestamp");
const sha1=require("sha1");
const creatToken=require("../token/creatToken.js");
//操作数据库
//查找用户，用于login回调
const findAllUsers=()=>{
	return new Promise((resolve,reject)=>{
		User.findOne({userName},(err,doc)=>{
			if(err){
				reject(err)
			}
			resolve(doc)
		})
	})
}

const Login=async (ctx)=>{
	let userName=ctx.request.body.name;
	let password=sha1(ctx.request.body.password);
	let doc=await findUser(userName);
	if(!doc){
		console.log("检查到用户名不存在");
		ctx.status=200;
		ctx.body={
			info:false
		}
	}else if(doc.password===password){
		console.log("密码一致");
		let token=creatToken(userName);
		doc.token=token;
		await new Promise((resolve, reject) => {
      doc.save((err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
	ctx.status=200;
	ctx.body={
		success:true,
		userName,
		token,
		create_time:doc.create_time
	};
		
	}else{
		console.log("密码错误");
		ctx.status=200;
		ctx.body={
			success:false
		}
	}
}