<template>
	<div class="popup-wraper">
		<div class="header">
			<span class="icon_bar" @click="changeSlide"></span>
		</div>
		<div class="nav-user">
			<div class="user-photo"><img src="../../assets/icon_user.jpg" alt=""></div>
			<div class="user-name">张先生</div>
			<div class="user-job-position">销售顾问</div>
		</div>
		<div class="nav-list">
			<ul>
				<li><span>个人信息</span></li>
				<li><span>密码修改</span></li>
				<li><span>意见反馈</span></li>
				<li><span>关于我们</span></li>
				<li><span>分享</span></li>
				<li><span>统计</span></li>
			</ul>
		</div>
		<div class="nav-footer">
			<span @click="loginOut">退 出</span>
			<span>帮 助</span>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'slidebar',
	  	props:["slideVisible"],
	  	methods:{
		    changeSlide:function(){
		    	this.$emit("changeSlide",!this.slideVisible);
		    },
		    loginOut:function(){
		    	this.$router.push({ path: '/login' });
		    }
		}
	}
</script>
<style lang="less" scoped>
	.popup-wraper{
		height: auto;
		overflow: hidden;
		.header{
			height: 1rem;
			.icon_bar{
				display: inline-block;
				width: 1rem;
				height: 1rem;
			}
			.icon_bar{
				float: right;
				background: url(../../assets/icon_04.png) no-repeat center center;
				background-size: 0.48rem;
			}
		}
		.nav-user{
			height: auto;
			overflow: hidden;
			padding: 0.2rem 0.5rem 0.5rem;
			border-bottom:0.01rem solid #89cdf8;
			.user-job-position,
			.user-name,
			.user-photo{
				display: inline-block;
				float: left;
				height: 0.85rem;
				color: #fff;
			}
			.user-job-position{
				line-height: 0.85rem;
				font-size: 0.28rem
			}
			.user-name{
				line-height: 0.85rem;
				margin: 0 0.3rem;
				font-size: 0.32rem;
				font-weight: 600;
			}
			.user-photo{
				width: 0.85rem;
				background: #dde1e4;
				border:0.01rem solid #cccccc;
				border-radius: 50%;
				overflow: hidden;
				img{
					display: inline-block;
					width: 100%;
					height: 100%;
					float: left;
				}
			}
		}
		.nav-list{
			height: auto;
			overflow: hidden;
			ul{
				height: auto;
				overflow: hidden;
				li{
					padding: 0.4rem 0.5rem;
					border-bottom:0.01rem solid #89cdf8;
					span{
						display: block;
						color: #fff;
						font-size: 0.30rem;
						font-weight: 500;
						background: url(../../assets/icon_05.png) no-repeat center right;
						background-size: auto 0.36rem
					}
				}
			}
		}
		.nav-footer{
			height: auto;
			overflow: hidden;
			padding: 1rem 0.1rem;
			text-align: center;
			span{
				border:0.01rem solid #89cdf8;
				font-size: 0.28rem;
				color: #fff;
				padding: 0.3rem 0.6rem;
				margin: 0 0.2rem;
			}
		}
	}
</style>