<template lang="jade">
div.content
  div.form.col-md-6.col-md-offset-3.text-center
    div.title  
      h1 代码段
      h2 daimaduan.cn | 即时问答社区  
    h4.change
      span
        a(v-link="{ path: '/sign', exact: true }") 登录
        b ·
        a(v-link="{ path: '/sign/signup', exact: true }") 注册

    router-view(
      class="view"
      keep-alive
      transition
      transition-mode="out-in")    

</template>
<script>
</script>

<style lang="stylus">
color-e66 = #e66
.content
  .form
    margin-top 10%
    h1
      font-size 48px
      color color-e66
    h2
      font-size 20px  
      color color-e66
    
    .change
      font-size 20px
      border-bottom 1px solid #eee
      color #b1b1b1
      margin-top 50px
      span
        position relative
        top 10px
        padding 0 30px
        background #fff
        a
          color #b1b1b1
          text-decoration none
        .v-link-active
          color #555555
        b
          margin 0 10px  
    form
      margin-top 20px        
      input
        margin-top 10px  
      p
        color #b1b1b1
        font-size 14px
        margin-top 5px  

          
</style>