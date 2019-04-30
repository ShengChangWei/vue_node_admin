<template>
  <div id="app">
     <transition name="rotate-fall">
      <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'app',
}
</script>

<style>
#app {
 
}
</style>
