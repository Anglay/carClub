<template>
	<div>
		<div class="header">
			<span class="icon_back" v-if="back" @click="goBack"></span>
			<span class="icon_bar" @click="changeSlide"></span>
			<div class="title" v-if="title"><span>{{title}}</span></div>
			<div class="title logo" v-else><img src="../../assets/icon_01.png" alt=""></div>
		</div>
		<yd-popup v-model="slideVisible" position="right" width="75%">
      		<v-slidebar :slideVisible="slideVisible" @changeSlide="changeSlide"></v-slidebar>
    	</yd-popup>
	</div>
</template>
<script>
	import slidebar from '@/components/common/slidebar'
	export default {
	  	name: 'header',
	  	props:["title","back"],
	  	data () {
		    return {
		    	slideVisible:false
		    }
	  	},
	  	 components:{
		    "v-slidebar":slidebar
		  },
	  	methods:{
		    changeSlide:function(){
		    	this.slideVisible = !this.slideVisible;
		    },
		    goBack:function(){
		    	this.$router.go(-1);
		    }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.header{
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		height: 1rem;
		background: #399edf;
		width: 100%;
		.icon_back,
		.icon_bar{
			display: inline-block;
			width: 1rem;
			height: 1rem;
		}
		.icon_back{
			float: left;
			background: url(../../assets/icon_02.png) no-repeat center center;
			background-size: auto 50%; 
		}
		.icon_bar{
			float: right;
			background: url(../../assets/icon_03.png) no-repeat center center;
			background-size: 50% auto;
		}
		.title{
			height: 1rem;
			padding: 0.30rem;
			margin: 0 1rem;
			text-align: center;
			span{
				display: inline-block;
				font-size: 0.36rem;
				height: 0.4rem;
				line-height: 0.4rem;
				color: #fff;
			}
			img{
				display: inline-block;
				height: 0.4rem;
			}
		}
	}
</style>
