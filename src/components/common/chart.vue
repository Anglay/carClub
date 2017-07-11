<template>
	<div class="chart">
		<div class="chart-title"><span>意向客户总览</span></div>
		<div class="item">
			<span v-for="(item,index) in data">
				<i :style="{ background: item.c }"></i>
				<em>{{item.d}}</em>
				<em>{{item.a*item.b}}人</em>
				<em>{{item.a*item.b}}%</em>
			</span>
		</div>
		<div class="chart-box">
			<canvas id="c1" style="width:200px;height:200px;"></canvas>
		</div>
	</div>
</template>

<script type="text/javascript">
	import GM from 'g2-Mobile'
	export default {
		data:function(){
			return {
				data:[
			        {a: 100, b: 0.5, c: '#e64c65',d:"H级"},
			        {a: 100, b: 0.1, c: '#11a8ab',d:"B级"},
			        {a: 100, b: 0.2, c: '#4fc4f6',d:"A级"},
			        {a: 100, b: 0.2, c: '#fcb150',d:"C级"}
			    ]
			}
		},
		mounted:function(){
			GM.Global.pixelRatio = 2;
		    var chart = new GM.Chart({
		        id: 'c1',
		        margin:10
		    });
		    chart.source(this.data);
		    chart.coord('polar', {
		        transposed: true,
		        inner: 0.7
		    });
		    chart.axis(false);
		    chart.intervalStack().position('a*b').color('c', function(tem) {
		        return tem;
		    });
		    chart.animate().wavec();
		    chart.render();
		}

	}
</script>

<style lang="less" scoped>
	.chart{
		height: auto;
		overflow: hidden;
		padding-top: 0.5rem;
		.chart-box{
			width: 200px;
			height: 200px;
			margin: 0 auto;
		}
		.chart-title{
			height: auto;
			overflow: hidden;
			padding: 0.15rem 0;
			border-top: 0.02rem solid  #399edf;
			border-bottom: 0.02rem solid  #399edf;
			text-align: center;
			span{
				display: inline-block;
				font-size: 0.32rem;
				color: #399edf;
				padding-left: 0.5rem;
				background: url(../../assets/icon_07.png) no-repeat center left;
				background-size: 0.35rem auto;
			}
		}
		.item{
			height: auto;
			overflow: hidden;
			padding:0.35rem;
			span{
				display: inline-block;
				width: 50%;
				float: left;
				height: 0.3rem;
				line-height: 0.3rem;
				font-size: 0.26rem;
				i,em{
					display: inline-block;
					float: left;
					list-style: none;
					font-style: none;
					margin-left: 0.2rem;
				}
				i{
					height: 0.25rem;
					width:0.4rem;
					border-radius: 0.05rem;
				}
			}
		}
	}
</style>