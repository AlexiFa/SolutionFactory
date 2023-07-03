<template>
  <div>
    <TopHeader />


    <MyFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/common/TopHeader.vue';
import MyFooter from '@/components/common/MyFooter.vue';
import { ref, provide } from 'vue';
import { fetchUserInfo } from './services/store';

export default {
  components: {
    TopHeader,
    MyFooter
  },
  setup() {
    const isLoggedIn = ref(!!localStorage.getItem('token'));

    provide('isLoggedIn', isLoggedIn);

    return { isLoggedIn };
    
  },
  created() {
    if (this.isLoggedIn) {
      fetchUserInfo();
    }
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
