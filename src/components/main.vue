<template>
    <yd-layout>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <div slot="tabbar">
          <v-navbar></v-navbar>
        </div>
    </yd-layout>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
