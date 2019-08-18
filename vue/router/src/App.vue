<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <router-link to="/">首页</router-link>
      <router-link :to="{path: '/about'}">about</router-link>
      <router-link :to="{name: 'Personal'}">Personal</router-link>
      <router-link :to="{name: 'List'}">List</router-link>
    </ul>
    <router-view/>
    <router-view name="mine"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
