<template>
  <div class="hello">
    <ul>
      <router-link to='/list/1'>detail1</router-link>
      <router-link to='/list/2'>detail2</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  methods: {
    getData() {
      const id = this.$route.params.userId;
      console.log('详情页：' + id)
    }
  },
  created() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
