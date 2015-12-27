<template lang="jade">
div
  img(class="logo", src="./assets/logo.png")
  h1 {{msg}}
  comp-a
  comp-b
  counter
  login
  br
  register
  hr
  a(href="index.html")
    我是链接 
  p
    我是P标签内的
  p(class="jade")
    很有趣jade啊
    a(href="index.html")
      我是链接  
</template>

<script>
import CompA from './components/a.vue'
import CompB from './components/b.vue'
import Counter from './components/counter.vue'


import login from './components/login.vue'
import register from './components/reg.vue'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    CompA,
    CompB,
    Counter,
    login,
    register
  }
}
</script>

<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color
.logo
  width 40px
  height 40px
.jade
  font-size:30px
  color:red
  a
    color:green  
</style>