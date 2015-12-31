<template lang='jade'>  
topnav  
leftnav

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
            "topnav":require('../components/_topnav.vue'),
            "leftnav":require('../components/_header.vue'),
            "bottom":require('../components/_footer.vue')
        }
} 
</script>

<style lang="stylus">
@import '../assets/bootstrap.min.css'
.main
  padding 5px

@media screen and (min-width: 48em)
  .main
    margin-left 150px
</style>