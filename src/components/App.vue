<template>
  <div id="app">
    <app-layout appear v-if="haveLayout"></app-layout>

    <template appear v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import ClassicLayout from '@/layouts/ClassicLayout'
export default {
  name: 'app',
  data () {
    return {
      //
    }
  },

  components: {
    'app-layout': ClassicLayout
  },

  computed: {
    haveLayout () {
      return this.$route.meta.layout || false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
