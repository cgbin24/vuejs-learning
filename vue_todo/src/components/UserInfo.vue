<template>
    <div id="wrapper">
        <!-- 这是一个由脚手架搭建的项目 -->
        <div id="main-left">
            <div class="logo">
                <img src="../assets/logo1.png" class="logoImg">
            </div>
            <div class="sideBar">
                <div class="opt upload">
                    <i></i>
                    <span>&nbsp;上传试题</span>
                </div>
                <div class="opt class-mng">
                    <i></i>
                    <span>&nbsp;班级管理</span>
                </div>
                <div class="opt release">
                    <i></i>
                    <span>&nbsp;发布训练</span>
                </div>
            </div>
        </div>
        <div id="main">
            <div class="head">
                <div class="info">
                    <div>
                        <p>
                            <img src="../assets/搜索.png" alt="" style="">
                        </p>
                        <p>
                            <img src="../assets/信息提示.png" alt="">
                        </p>
                    
                    </div>
                   
                    <div>
                        <span class="user-img"></span> <span> &nbsp;用户名</span> 

                    </div>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <i></i> &nbsp;用户信息
                    <p class="line"></p>
                </div>
                <ul>
                    <li>
                        <span class="info">用户名：</span> <span> 上元教育培训机构</span>
                    </li>
                    <li>
                        <span class="info">所在地区：</span>  
                        <select>
                            <option class="option">浙江-嘉兴-南湖区</option>
                            <option class="option">浙江-嘉兴-秀洲区</option>
                            <option class="option">浙江-嘉兴-海盐县</option>
                            <option class="option">浙江-嘉兴-平湖区</option>
                        </select>
                    </li>
                    <li>
                        <span class="info">详细地址：</span> <span> 惠兴路153号</span>
                    </li>
                    <li>
                        <span class="info">使用时间：</span>  <span>2018-12-21至2022-12-21</span>
                    </li>
                </ul>
                <input type="button" value="退出账号" class="exit">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data (){
        return {
           
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #wrapper{
        display: inline-flex;
        width: 1440px;
        height: 720px;
        margin:  auto;
    }
    #wrapper #main-left{
        width:256px;
        height:720px;
        background:rgba(0,33,64,1);
    }
    .logo{
        width: 256px;
        height: 64px;
    }
    .logo .logoImg{
        width: 152px;
        height: 32px;
        margin: 16px 52px;
    }
    .sideBar{
        width:256px;
        height:656px;
        background:rgba(0,21,41,1);
    }
    .sideBar .opt{
        width:256px;
        height:63px;
        line-height: 63px;
    }
    .sideBar .release{
        background:rgba(24,144,255,1);
    }
    .sideBar .release i{
        background: url("../assets/发布训练.png") no-repeat ;
    }
    .sideBar .class-mng i{
        background: url("../assets/班级管理.png") no-repeat ;
    }
    .sideBar .upload i{
        background: url("../assets/上传试题.png") no-repeat ;
    }
    .sideBar .opt i{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 23px;
        vertical-align: middle;
    }
    .sideBar .opt span{
        width:56px;
        height:22px;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);

     }
    #wrapper #main{
        width: 1184px;
        height: 720px;
    }
    #main .head{
        width:1184px;
        height:64px;
        background:rgba(255,255,255,1);
    }
    .head .info {
        float: right;
        margin-right: -4px;
        width: 215px;
        height: 64px;
        line-height: 64px;

    }
    .head .info div{
        width:105px;
        height:22px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.65);
        line-height:22px;
        display: inline-block;
    }
    .head .info div p{
        display: inline-block;
        margin-left: 24px;
    }
    .head .info div img{
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .head .info .search{
        background: url("../assets/搜索.png") no-repeat ;
    } 
    .head .info .tips{
        background: url("../assets/信息提示.png") no-repeat ;
    } 
    .head .info .user-img{
        display: inline-block;
        width:24px;
        height:24px;
        line-height: 24px;
        vertical-align: middle;
        background:rgba(212,215,217,1);
        border-radius: 50%;
    }
    .head .info div span{
        vertical-align: middle;
        line-height: 100%;
    }
    #main .content{
        width:1136px;
        height:608px;
        background:rgba(255,255,255,1);
        border-radius:2px;
        margin: 24px;
    }
    .content .title{
        width: 100%;
        height: 68px;
        line-height: 68px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:550;
        color:rgba(0,0,0,0.85);
        line-height:68px;
    }
    .content .title i{
        display: inline-block;
        width:5px;
        height:20px;
        margin-left: 30px;
        background:rgba(24,144,255,1);
        vertical-align: middle;
    }
    .content .title .line{
        width:1135px;
        height:1px;
        background:rgba(233,233,233,1);
    }
    .content ul li .info{
        width:100px;
        height:24px;
        margin: 33px 0 0 33px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:550;
        color:rgba(0,0,0,0.85);
        line-height:24px;
    }
    .content ul li span,.content ul li select{
        color:rgba(89,89,89,1);
        font-weight: 500;
    }
     .content ul li span{
         display: inline-block;
     }
     .content ul li select{
         width:224px;
        height:40px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(0,0,0,0.15);
     }
    .content .exit{
        outline:none;  
        width:118px;
        height:32px;
        background:rgba(244,244,244,1);
        border-radius:4px;
        border:1px solid rgba(244,244,244,1);
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin: 81px 0 0 32px;
    }
</style>



