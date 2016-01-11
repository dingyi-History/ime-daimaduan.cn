<template lang="jade">
div.media.card
  a.media-left(v-link="{ path: '/sign' }")
    img.media-object.img-circle(src="../../assets/logo.png",alt="动态")
  div.media-body
    h4.media-heading 动态标题
    p 动态内容
</template>

<script>
export default{
}
</script>

<style lang="stylus">
img-wh = 64px

.card
  padding 15px
  margin-bottom 10px
  .media-left
    .media-object
      width img-wh
      height img-wh
      box-shadow 0 0 1px 1px #eee
      &:hover
        border 1px solid #e66

  .media-body
    h4
      font-size 18px    

</style>