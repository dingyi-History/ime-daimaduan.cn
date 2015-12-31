<template lang="jade">
title
div.card-deck-wrapper
  div.card-deck.col-md-3
    div.card
      img.card-img-top(src="../assets/logo.png",alt="标签群名称")
      div.card-block
        h4.card-title 标签名
        p.card-text  200/1000      
</template>
<script>
export default{
  components : {
    "title" : require("../components/common/_title.vue")
  }
}  
</script>
<style lang="stylus">
.card-deck-wrapper
  .card-deck
    margin-top 10px
    .card
      text-align center
      .card-img-top
        width 80px
        height 80px
      .card-block
        .card-title
          font-size 20px
        .card-text
          font-size 16px
</style>