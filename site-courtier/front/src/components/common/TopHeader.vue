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
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="border-bottom: 0.5px solid #2a2d34;">
    <div class="container-fluid m-1">
      <router-link to="/" class="navbar-brand">Accueil</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="d-flex navbar-nav col-3">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">À propos</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn && userInfo">
            <router-link to="/CDashboard" class="nav-link" v-if="userInfo.trusted_metadata.role == 'COURTIER'">Dossiers </router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLoggedIn && userInfo">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="userInfo.trusted_metadata.role == 'CLIENT'">
              Centre de Contrôle
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
        <div class="d-flex btn btn-success col-3 me-5" id="login" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link active" aria-current="page">Connexion</router-link>
        </div>
        <div class="d-flex justify-content-center col-3 me-5" v-if="isLoggedIn">
            <span v-if="userInfo" class="navbar-brand" id="welcome">Bienvenue {{ userInfo.name.first_name }}</span>
            <button id="logout" @click="handleLogout" class="btn btn-danger">Se deconnecter</button> 
        </div>
        <form class="d-flex col-3 ms-5" role="search">
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
#login{
  background-color: #E9C46A;
	color: black;
  justify-content: center;
	border-radius: 10px;
	margin-right: 10px;
}
#logout{
	background-color: #E9C46A;
	color: black;
	border-radius: 10px;
	margin-right: 10px;
}

#welcome{
  font-weight: bolder;
  color: #2a2d34;
  font-size: larger;
  margin-right:20px;
}
</style>

<script>

export default {
    name: 'TopHeader',

}

</script>