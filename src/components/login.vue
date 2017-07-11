<template>
    <yd-layout>
        <div class="login">
			<div class="wraper">
				<div class="logo"><img src="../assets/logo.png" alt=""></div>
				<div class="login-title"><span>客户管理系统</span></div>
				<div class="content">
					<div class="from-box">
						<div class="from-item">
							<span class="icon icon-user"><input type="text" class="input-text" placeholder="用户名"></span>
						</div>
						<div class="from-item">
							<span class="icon icon-pwd"><input type="text" class="input-text" placeholder="密码"></span>
						</div>
						<div class="from-check">
							<span class="check-elm"><i v-if="check"></i></span>
							<span class="check-text" @click="setCheck">记住密码</span>
						</div>
					</div>
					<div class="from-footer"><span @click="doLogin">登录</span></div>
				</div>
			</div>
			<div class="login-footer"><span>忘记密码？</span></div>
		</div>
    </yd-layout>
</template>

<script type="text/javascript">
	import Store from 'store'
	export default {
	  	name: 'login',
	  	data () {
	    	return {
	    		check:true
	    	}
	  	},
	  	methods:{
	  		setCheck:function(){
	  			this.check = !this.check;
	  		},
	  		doLogin:function(){
	  			var user = {
	  				name:"ouyang"
	  			};
 				Store.set('user',user);
 				this.$router.push({ path: '/' });
	  		}
	  	}
	}
</script>

<style lang="less" scoped>
	.login{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #399edf;
		.wraper{
			height: auto;
			overflow: hidden;
			padding: 1.5rem 0.45rem 0.5rem;
			.logo{
				width:2.5rem;
				height:  0.65rem;
				margin: 0 auto;
				img{
					display: inline-block;
					width: 100%;
					float: left;
				}
			}
			.login-title{
				height: 0.95rem;
				border-bottom: 0.01rem solid #fff;
				text-align: center;
				clear: both;
				span{
					display: inline-block;
					color: #fff;
					font-size: 0.34rem;
					font-weight: 500;
					background: #399edf;
					padding: 0.6rem 0.3rem 0;
				}
			}
			.content{
				position: relative;
				height: auto;
				overflow: hidden;
				padding: 0.6rem 0 0.9rem;
				.from-box{
					height: auto;
					overflow: hidden;
					background: #fff;
					border-radius: 0.15rem;
					padding: 0.3rem 0.3rem 0.9rem;
					.from-item{
						height: auto;
						overflow: hidden;
						padding: 0.25rem 0;
						border-bottom: 0.01rem solid #ebecee;
						margin-bottom: 0.25rem;
						.icon{
							display: block;
							height: 0.6rem;
							padding-left: 0.6rem;
						}
						.icon-user{
							background: url(../assets/icon_07.png) no-repeat center left;
							background-size: 0.35rem auto;
						}
						.icon-pwd{
							background: url(../assets/icon_06.png) no-repeat center left;
							background-size: 0.35rem auto;
						}
						.input-text{
							display: block;
							width: 100%;
							height: 0.6rem;
							padding: 0.1rem;
							border:none;
							border-left: 0.01rem solid #ebecee;
							font-size: 0.32rem;
							color: #999999;
						}
					}
					.from-check{
						height: auto;
						overflow: hidden;
						padding: 0.25rem 0;
						margin-bottom: 0.25rem;
						.check-elm,
						.check-text{
							display: inline-block;
							float: left;
						}
						.check-elm{
							width: 0.5rem;
							height: 0.5rem;
							border:0.01rem solid #ebecee;
							border-radius: 0.1rem;
							i{
								display: inline-block;
								float: left;
								margin: 0.1rem;
								width: 0.3rem;
								height: 0.3rem;
								background: #399edf;
								border-radius: 0.05rem;
							}
						}
						.check-text{
							margin-left: 0.2rem;
							height: 0.5rem;
							line-height: 0.5rem;
							font-size: 0.28rem;
							color: #399edf;
						}
					}
				}
				.from-footer{
					position: absolute;
					margin-left: -0.9rem;
					left:50%;
					z-index: 99;
					bottom: 0;
					background: #399edf;
					height: 1.8rem;
					width: 1.8rem;
					border-radius: 100%;
					span{
						display: inline-block;
						margin: 0.1rem;
						width: 1.6rem;
						height: 1.6rem;
						border-radius: 100%;
						line-height: 1.6rem;
						background: #fff;
						text-align: center;
						font-size: 0.32rem;
						color: #399edf;
					}
				}
			}
		}
		.login-footer{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1rem;
			line-height: 1rem;
			background: #328bc5;
			text-align: center;
			span{
				font-size: 0.3rem;
				color: #fff;
			}
		}
	}
</style>