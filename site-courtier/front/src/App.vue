<template>
  
 <!--- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/CDashboard">Menu Courtier</router-link> |
    <router-link to="/CDossier">Dossier Courtier</router-link>
  </nav> 
  <router-view/> -->
 <div>
    <TopHeader />

  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/common/TopHeader.vue';

export default {
  components: {
    TopHeader
  }
}
// @ is an alias to /src
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
