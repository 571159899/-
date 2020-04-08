<template>
  <div id="app">
    <router-view />
   <!-- <daohang></daohang> -->
  </div>
</template>

<script>
  import daohang from './components/daohang'
  export default {
    components: {
      daohang
    },
    name: 'App',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   text-align: center;
    /* color: #2c3e50; */
    margin-top: 60px;
  }
</style>
