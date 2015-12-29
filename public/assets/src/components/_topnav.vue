<template lang="jade">
div.topnav
  form.form-inline(action="/xx.html",method="post")
    div.form-group
      input.form-control.form-control-sm(type="text",placeholder="搜索")
      div.btn-group(role="group")
        a.btn.btn-sm.btn-primary(v-link="{ path: '/sign' }") 登录
        a.btn.btn-sm.btn-success(v-link="{ path: '/sign/signup'}") 注册  
</template>

<style lang="stylus">
.topnav
  width 278px
  position fixed
  top 10px
  right 10px 
  z-index 999
  input
    border-radius 20px 0 0 20px
    margin-right -1px
    height 31px
  .btn-primary
    border-radius 0 
  .btn-success
    border-radius 0 20px 20px 0       
</style>