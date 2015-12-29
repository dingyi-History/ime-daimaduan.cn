<template lang="jade">
首页

div#main
  a(v-link="{ path: '/foo' }") 
    GO TO Foo
  br  
  a(v-link="{ path: '/bar' }") 
    GO TO Bar
  br  
  router-view
</template>

<script>

</script>