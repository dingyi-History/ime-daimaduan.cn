<template lang='jade'>
div.nav
  ul
    li
      img(src="/dist/logo.png")
    li
      a(v-link="{ path: '/' }")
        首页
    li
      a(v-link="{ path: '/group' }")
        标签群
    li
      a(v-link="{ path: '/qa' }")
        问答
    li 
      p daimaduan.cn   
</template>

<style lang="stylus">
nav-back = #494646
color-white = #FFF
font-20 = 20px
hover-color = #e66
b-radius = 3px


.nav
  width 150px
  background nav-back 
  position fixed
  left 0 
  top 0
  bottom 0

  ul
    li
      display block
      line-height 50px
      text-align center
      color color-white

      img
        width 100px
        height 100px
        margin-top -8px
      
      a
        color color-white
        font-size font-20
        text-decoration none
        padding 5px
      
        &:hover
          color hover-color 
          border 1px solid #e66
          border-radius b-radius
</style>