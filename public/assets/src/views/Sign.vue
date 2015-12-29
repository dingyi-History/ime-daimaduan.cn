<template lang="jade">
div.content
  div.form
    div.title  
      h1 代码段
        small | 即时问答社区
      hr
      h2 daimaduan.cn    
    form
      input
      br  
      input 
      br 
      a.btn  注册  
      a.btn  登录
</template>

<style lang="stylus">
percent-15 = 15%
percent-10 = 10%
hover-color = #e66
font-h1 = 28px
b-radius = 4px
input-width = 300px
color-00b388 = #00b388
color-white = #FFF
nav-back = #494646

.content
  background nav-back
  position cover
  .form
    margin percent-10  auto
    border-radius b-radius
    padding 50px
    width 50%
    background rgba(255,255,255,0.6)

    .title
      text-aligin center

    h1
      text-align center
      font-size font-h1
      margin-bottom 10px

    h2
      text-align center
      margin-top 10px
      margin-bottom 20px
    form
      text-align center    
      input
        width input-width
        height 30px
        border-radius b-radius
        border 1px solid #EEE
        margin-bottom 10px
      .btn
        display inline-block
        width 50px
        padding 10px
        background color-00b388
        border-radius b-radius
        margin-left 10px
        color color-white
        &:hover
          box-shadow 0 0 1px 1px #eee
          
</style>