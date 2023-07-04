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
  <div class="container-fluid m-2">
    <router-link to="/" class="navbar-brand">Accueil</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-1">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link active" aria-current="page">Connexion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">À propos</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn && userInfo">
          <router-link to="/CDashboard" class="nav-link" v-if="userInfo.trusted_metadata.role == 'COURTIER'">Dossiers </router-link>
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
          <router-link to="/ManageAccount" class="nav-link">Mon compte</router-link>
        </li>
      </ul>
      <div class="me-4 mb-2 mb-lg-0" v-if="isLoggedIn">
        <span v-if="userInfo" id="welcome">Bienvenue {{ userInfo.name.first_name }}</span>
        <button id="logout" @click="handleLogout" class="btn btn-danger">Se deconnecter</button> 
      </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search">
        <button class="btn btn-dark" type="submit">Recherche</button>
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

button{
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
}

#logout{
	background-color: #E9C46A;
	color: black;
	border-radius: 10px;
	margin-right: 10px;
}

#welcome{
  margin-left: auto;
  font-weight: bolder;
  color: #2a2d34;
  font-size: larger;
}
</style>

<script>

export default {
    name: 'TopHeader',

}

</script>