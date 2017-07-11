<template>
	<div class="gitem">
		<yd-countup :endnum="item.count" class="gitem-count"></yd-countup>
		<div class="gitem-text">{{item.text}}</div>
	</div>
</template>
<script>
	export default {
	  	name: 'gitem',
		props:["item"],
		methods:{
	  	}
	}
</script>
<style lang="less" scoped>
	.gitem{
		text-align: center;
		.gitem-count{
			font-size: 0.42rem;
			color: #399edf;
			font-weight: 600;
			padding-top: 0.5rem;
		}
		.gitem-text{
			font-size: 0.28rem;
			color: #666666;
			padding-top: 0.20rem;
		}
	}
</style>