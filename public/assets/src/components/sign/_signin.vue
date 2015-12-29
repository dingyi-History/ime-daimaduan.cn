<template lang="jade">
form.form-group.col-md-8.col-md-offset-2
  input.form-control(type="text",placeholder="请输入邮箱") 
  input.form-control(type="password",placeholder="密码总得填的") 
  div.checkbox
    label.pull-left
      input(type="checkbox") 
      自动登录
    a.pull-right
      忘记密码？   
  br    
  a.btn.btn-primary.btn-block  登录
  p 确认遵守用户协议
</template>
<style lang="stylus">
 .checkbox
   label
     color #b1b1b1
     &:hover
       color #e66
   a
     line-height 32px
     color #b1b1b1
     text-decoration none    
     &:hover
       color #e66
</style>