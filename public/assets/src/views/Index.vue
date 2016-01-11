<template lang="jade">
div.index.col-md-6
  h2 最新动态
  h1 xxx
  p xxx
  h1 xxx
  div.title
  card
  card
  card
  card
  card 
  card
  card
  card
  card
  card
div.side.col-md-6
  h2 精彩即将呈现   
  hr
  small coming soon  
</template>
<script>
export default{
    components : {
        "card" : require("../components/index/_card.vue")
    }
}
</script>

<style lang="stylus">
.index
  padding-top 20px
  border-right 1px solid #eee
  min-height 100%
  h2
    font-size 20px  
    padding-right 20px
    background #fff
    display inline-block  
  .title
    border-bottom 1px solid #eee
    margin-top -15px

.side
  text-align center
  margin-top 300px
  h2
    font-size 20px
</style>