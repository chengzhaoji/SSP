//1:加载第三方模块
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");//跨域
const session=require("express-session");
//2:配置数据库连接池:提高数据效率
var pool=mysql.createPool({
    host:"127.0.0.1",//数据库地址
    user:"root",//数据库用户名
    password:"",//数据库密码
    port:3306,//数据库端口
    database:"ssp",//数据库名称
    connectionLimit:15//连接数量
});
//3:配置跨域模块
var server=express();
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true//请求验证
}));
//4:配置session模块
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,  //请求时更新数据
    saveUninitialized:true   //保存初始数据
}));
//4.1:配置项目静态目录
server.use(express.static("public"));
//5:启动监听3000
server.listen(3000);
