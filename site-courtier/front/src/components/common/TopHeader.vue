<script setup>
// import { useRouter } from 'vue-router';
// import { ref, watch } from 'vue';
// // import { inject } from 'vue';

// const router = useRouter()
// // const isLoggedIn = inject('isLoggedIn')
// const isLoggedIn = ref(!!localStorage.getItem('token'));

// watch(isLoggedIn, (newValue, oldValue) => {
//   // Redirigir al usuario a la misma página para forzar una actualización de la vista.
//   router.push(router.currentRoute.value);
// });

// const Logout = async () =>{
//   const res = await fetch('http://localhost:3000/logout', {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//       session_token: localStorage.getItem('token')
//     })
//   }).then(res => res.json())

//     if (res.success || res.clearToken) {
//       localStorage.removeItem('token')
//       isLoggedIn.value = false
//       router.push('/')
//     } else {
//       alert(res.message)
//     }

// }

import { useRouter } from 'vue-router';
import { isLoggedIn, logout } from '../../services/store';  // Asegúrate de ajustar la ruta del import según tu estructura de carpetas

const router = useRouter()

const handleLogout = async () => {
  const success = await logout();
  if (success) {
    router.push('/');
  }
}


</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dossier
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/ClientForm" class="dropdown-item">Nouveau Dossier</router-link></li>
            <li><router-link to="/CDashboard" class="dropdown-item" >Dashboard</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/ManageAccount" class="nav-link">Account</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <button @click="handleLogout"><router-link to="/login" class="nav-link active" aria-current="page">Logout</router-link></button>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view></router-view>
</template>


<script>


export default {
    name: 'TopHeader',

}

</script>