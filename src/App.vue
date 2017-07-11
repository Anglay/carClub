<template>
  <yd-layout>
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </yd-layout>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .popup-content{
    background: #399edf;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
