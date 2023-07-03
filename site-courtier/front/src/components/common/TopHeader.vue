<script setup>

import { useRouter } from 'vue-router';
import { isLoggedIn, logout, userInfo} from '../../services/store';  

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
        <li class="nav-item" v-if="isLoggedIn && userInfo">
          <router-link to="/CDashboard" class="nav-link" v-if="userInfo.trusted_metadata.role == 'COURTIER'">Courtier Dashboard</router-link>
        </li>
        <li class="nav-item dropdown" v-if="isLoggedIn && userInfo">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="userInfo.trusted_metadata.role == 'CLIENT'">
            Client Dashboard
          </a>
          <ul class="dropdown-menu" >
            <li><router-link to="/UDashboard" class="dropdown-item" >Dossiers en Cours</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/ClientForm" class="dropdown-item">Nouveau Dossier</router-link></li>
          </ul>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/ManageAccount" class="nav-link">Account</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <!-- Rajouter du css --><span v-if="userInfo">Welcome {{ userInfo.name.first_name }}</span>
          <button @click="handleLogout" class="btn btn-danger">Logout</button>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view> </router-view>
</template>
<style scoped >
@media all and (min-width: 992px) {
	.navbar .nav-item .dropdown-menu{ display: none; }
	/* .navbar .nav-item:hover .nav-link{} */
	.navbar .nav-item:hover .dropdown-menu{ display: block; }
	.navbar .nav-item .dropdown-menu{ margin-top:0; }
}	
</style>

<script>

export default {
    name: 'TopHeader',

}

</script>