<template>
  <div class="hello">
    <h3>
      {{num2 | filter1}}
      {{num}}
    </h3>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      num2: 222
    }
  },
  computed: {
    ...mapState('index', [
      'num'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  size: 100% 50px;
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
