<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name:'App',
  components:{
    NavBar
  }
}
</script>

<style lang="scss">
html {
  background: url(../src/assets/mars.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
body {
  background-color: transparent !important;
}


</style>

