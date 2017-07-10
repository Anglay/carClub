<template>
	<div class="home">
		<v-header></v-header>
		<div class="page-container">home</div>
	</div>
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
		overflow: hidden;
		padding-top: 1rem;
	}
</style>