<template lang='jade'>  
div.top       
  top

div.main
  router-view(
    class="view"
    keep-alive
    transition
    transition-mode="out-in")

</template>
<script>
export default {
    components:{
            "top":require('../components/_header.vue'),
            "bottom":require('../components/_footer.vue')
        }
}
  
</script>

<style lang="stylus">
*
  margin 0
  padding 0

.main
  margin-left 150px
  padding 5px

</style>