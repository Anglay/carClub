<template>
	<yd-layout>
		<div slot="top">
			<v-header></v-header>
		</div>
		<div class="page-container">
			<div class="header-grid">
				<yd-grids-group :rows="4">
			        <yd-grids-item v-for="(item,index) in list" :key="index">
			            <div slot="text"><v-gItem :item="item"></v-gItem></div>
			        </yd-grids-item>
			    </yd-grids-group>
			</div>

			<!-- 图表 -->
			<v-chart></v-chart>

			<!-- 新增 -->
			<div class="wraper">
				<yd-button size="large" type="primary" bgcolor="#399edf" color="#fff" @click.native="addCustomer">新增客户</yd-button>
			</div>
		</div>
	</yd-layout>
</template>

<script>
	import header from '@/components/common/header'
	import gItem from '@/components/common/gitem'
	import chart from '@/components/common/chart'
	export default {
	  	name: 'main',
	  	data () {
		    return {
		    	list:[{
		    		text:"本月新增",
			      	count:900
			    },{
		    		text:"新增成交",
			      	count:100
		    	},{
		    		text:"新增失控",
			      	count:10
		    	},{
		    		text:"新增战败",
			      	count:50
		    	},{
		    		text:"留存客户",
			      	count:200
		    	},{
		    		text:"留存成交",
			      	count:60
		    	},{
		    		text:"留存失控",
			      	count:20
		    	},{
		    		text:"留存战败",
			      	count:10
		    	}]
		    }
	  	},
	  	components:{
		    "v-header":header,
		    "v-gItem":gItem,
		    "v-chart":chart
	  	},
	  	methods:{
	  		addCustomer:function(){
	  			console.log(123)
	  		}
	  	}
	}
</script>

<style lang="less" scoped>
	.page-container{
		position: relative;
		height: auto;
		padding: 1rem 0.3rem;
		background: #fff;
		.header-grid{
			height: auto;
			overflow: hidden;
			.grids-item::before,
			.grids-item::after{
				border-color: #fff;
			}
		}
		.wraper{
			height: auto;
			overflow: hidden;
			.btn-block{
				margin: 0;
			}
		}
	}
</style>