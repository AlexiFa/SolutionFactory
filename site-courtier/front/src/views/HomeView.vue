<template>
    <div style = "position: relative; z-index: -1; height: 100%;">
      <div class="background-circle1"></div>
      <div class="background-circle2"></div>
      <div class="home" style=" position: relative;z-index:2 ;">
        <HelloWorld msg="Courtier, expert en crédit" />
      </div>
    </div>

</template>

<style scoped >
.background-circle1 {
  position: absolute;
  z-index: 1;
  top: -300px;
  right:-350px;
  height: 800px;
  width:1100px;
  background-color: #588b8b;
  border-radius:1100px;
  border: 0.5px solid #2a2d34;
}
.background-circle2{
  position: absolute;
  z-index: 1;
  bottom: -300px;
  left: -350px;
  height: 800px;
  width:1100px;
  background-color: #e9c46a;
  border-radius: 1100px;
  border: 0.5px solid #2a2d34;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

}
</script>
