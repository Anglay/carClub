<template>
	<div class="navbar">
		<div class="navbar-box">
			<div class="item-box">
				<router-link class="item" to="/message"><span class="icon_msg">客户回访</span></router-link>
				<router-link class="item" to="/home"><span class="icon_home">主页</span></router-link>
				<router-link class="item" to="/rss"><span class="icon_rss">信息平台</span></router-link>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.navbar{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1.1rem;
		background: #fff;
		box-shadow: 0 -0.05rem 0.1rem #e4f2fb;
		.navbar-box{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1.2rem;
			.item-box{
				display: -moz-box;
				display: -webkit-box;
				display: box;
				.item{
					display: block;
					min-width: 100px;
					text-align: center;
					-moz-box-flex: 1; 
    				-webkit-box-flex: 1; 
    				box-flex: 1;
    				margin-top: 0.1rem;
    				span{
    					display: inline-block;
    					padding-top: 0.65rem;
    					font-size: 0.26rem;
    				}
    				.icon_msg{
    					background: url(../../assets/icon_msg.png) no-repeat center 0.1rem;
    					background-size: 0.5rem auto;
    				}
    				.icon_home{
    					background: url(../../assets/icon_home.png) no-repeat center 0.1rem;
    					background-size: 0.5rem auto;
    				}
    				.icon_rss{
    					background: url(../../assets/icon_rss.png) no-repeat center 0.1rem;
    					background-size: 0.5rem auto;
    				}
				}
				.active{
					margin-top: 0;
					span{
						text-indent: -9999em;
						width: 1.2rem;
						height: 1.2rem;
						padding:0;
						border-radius: 100%;
					}
					.icon_msg{
    					background:#399edf url(../../assets/icon_msg_active.png) no-repeat center center;
    					background-size: 0.5rem auto;
    				}
    				.icon_home{
    					background:#399edf url(../../assets/icon_home_active.png) no-repeat center center;
    					background-size: 0.5rem auto;
    				}
    				.icon_rss{
    					background:#399edf url(../../assets/icon_rss_active.png) no-repeat center center;
    					background-size: 0.5rem auto;
    				}
				}
			}
		}
	}
</style>