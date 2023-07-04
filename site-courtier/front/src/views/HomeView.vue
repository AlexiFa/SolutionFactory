<template>
  <div class="home">
    <HelloWorld msg="Courtier, expert en crédit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  // created() {
  //   this.verifyToken();
  // },
  // methods: {
  //   async verifyToken() {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       const res = await fetch('http://localhost:3000/api/auth/authenticate', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type' : 'application/json'
  //         },
  //         body: JSON.stringify({
  //           token: token
  //         })
  //       }).then(res => res.json())

  //       if(!res.success) {
  //         localStorage.removeItem('token');
  //         localStorage.removeItem('user_id');
  //         alert('Your session has expired')
  //       }
  //     }
  //   }
  // }
}
</script>
