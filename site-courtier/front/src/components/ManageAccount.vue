<script setup>

import { useRouter } from 'vue-router';
import { logout, userInfo} from '@/services/store';  

const router = useRouter()

const handleLogout = async () => {
  const success = await logout();
  if (success) {
    router.push('/');
  }
}


</script>

<template>


<div class="container-fluid">
	<div class="row gutters">
		<div id="card" class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
			<div class="card h-100">
				<div class="card-body">
					<div class="account-settings">
						<div id="profile" class="user-profile">
							<div class="user-avatar">
								<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin">
							</div>
							<h5 class="user-name">{{ userInfo.name.first_name }}</h5>
							<h6 class="user-email">{{ userInfo.emails.email }}</h6>
						</div>
						<button id="logout" @click="handleLogout" class="btn btn-outline-danger">Se deconnecter</button>
					</div>
				</div>
			</div>
		</div>
		<div id="card" class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
			<div class="card h-100">
				<div class="card-body">
					<div class="row gutters">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<h6 id="text">Details personnels</h6>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="LastName">Nom</label>
								<input type="text" class="form-control" id="LastName" placeholder="Entrez votre Nom">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="FirstName">Prénom</label>
								<input type="text" class="form-control" id="FirstName" placeholder="Entrer votre prénom">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="eMail">Email</label>
								<input type="email" class="form-control" id="eMail" placeholder="Entrer votre adresse email">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="phone">Téléphone</label>
								<input type="text" class="form-control" id="phone" placeholder="Entrer votre numéro de téléphone">
							</div>
						</div>
					</div>
					<div class="row gutters">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<h6 class="mt-3 mb-2" id="text">Adresse</h6>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="Street">Rue</label>
								<input type="name" class="form-control" id="Street" placeholder="Entrez la rue">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="ciTy">Ville</label>
								<input type="name" class="form-control" id="ciTy" placeholder="Entrer la ville">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="sTate">Pays</label>
								<input type="text" class="form-control" id="sTate" placeholder="Entrer le pays">
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div class="form-group">
								<label for="zIp">Code postal</label>
								<input type="text" class="form-control" id="zIp" placeholder="Entrez le code postal">
							</div>
						</div>
					</div>
					<div class="row gutters">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="text-right">
								<button type="button" id="modifier" name="submit" class="btn btn-dark">Modifier</button>
								<button type="button" id="submit" name="submit" class="btn btn-dark ">Annuler</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: 'ManageAccount',
	data() {
    return {
      user: {}
    };
  },

}

</script>

<style scoped>
body {
    margin: 0;
    padding-top: 40px;
    color: #2e323c;
    background: #f5f6fa;
    position: relative;
    height: 100%;
}
.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}
.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}
.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}
.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
}
.account-settings .about p {
    font-size: 0.825rem;
}
.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background:#E9C46A;
    color: #2e323c;
}

.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}

#modifier {
	background-color: #E9C46A;
	color: black;
	border-radius: 10px;
	margin-right: 10px;
}

.text-right {
	margin-top: 20px;
}

.container-fluid{
	background-color: #588B8B;
}

#text {
	color: black;
	font-weight: bold;
}

#card{
	margin-top: 60px;
}

#logout{
	background-color: #E9C46A;
	color: black;
	border-radius: 10px;
	margin-right: 10px;
	margin-top: 30px;
}

#profile{
	margin-top: 60px;
}


</style>