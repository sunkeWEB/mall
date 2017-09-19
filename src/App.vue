<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  height: 70px;
  background-color: #fff;
  line-height: 70px;
  width: 100%;
}
  .navbar-cart-logo{
    width: 25px;
    height: 20px;
  }
  .header > .navbar {
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px;
    position: relative;
  }
  .navbar-menu-container {
    position: absolute;
    right: 0;
    display: flex;
    padding-left: 15px;
    text-align: right;
    /*justify-content: flex-end;*/
  }
.navbar, .navbar-left-container{
  /*display: flex;*/
}
</style>
