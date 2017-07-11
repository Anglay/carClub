<template>
	<yd-layout>
		<div slot="top">
			<v-header title="信息平台"></v-header>
		</div>
		<div class="page-container">信息平台</div>
	</yd-layout>
</template>

<script>
import header from '@/components/common/header'
export default {
  name: 'main',
  data () {
    return {
      
    }
  },
  components:{
    "v-header":header
  },
  methods:{
  }
}
</script>

<style type="less" scoped>
	.page-container{
		position: relative;
		height: auto;
		padding: 1rem 0.3rem;
		background: #fff;
	}
</style>