<template>
  <div class="container">
    <!-- Begin Header -->
    <header>
      header
    </header>
    <!-- End Header -->

    <!-- Begin Main Content -->
    <main>
      <router-view></router-view>
    </main>
    <!-- End Main Content -->

    <!-- Begin Footer -->
    <footer>
      footer
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
export default {
  name: 'classic-layout',
  data () {
    return {
      //
    }
  },

  computed: {
    haveLayout () {
      return this.$route.meta.layout
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
