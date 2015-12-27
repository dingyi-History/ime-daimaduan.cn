<template>
  <div>
    <h1>我决定自己一定要务实，用可行的技术区实现我想实现的功能</h1>
    <p>Current count: {{count}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { count: 0 }
  },
  ready () {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },
  destroyed () {
    clearInterval(this.handle)
  }
}
</script>