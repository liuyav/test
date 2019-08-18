<template>
  <div class="hello">
    <mark-down @on-save="saveEdit" :initialValue="initVal"></mark-down>
  </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      initVal: ''
    }
  },
  components:{
    MarkDown
  },
  created() {
    //this.Http.getData();
    //this.Http.sendData();
    this.Http.modifyArticleCont({
      title: 'test'
    }).then(res => {
      this.initVal = res.data.data.markdown
    })
  },
  methods: {
    // saveEdit(cont) {
    //   this.Http.saveArticleCont({
    //     title: 'test',
    //     decr: 'decr',
    //     markdown: cont.value,
    //     content: cont.html
    //   })
    //   console.log(cont)
    // }
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
