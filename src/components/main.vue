<template>
  <div class="main">
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <v-navbar></v-navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar'
export default {
  name: 'main',
  data () {
    return {
    }
  },
  components:{
    "v-navbar":navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
  position: relative;
  height: auto;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
