<script setup>

import {ref} from 'vue' 
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const first_name = ref('')
const last_name = ref('')
const name = {first_name, last_name}
const password = ref('')
const conf_password = ref('')
const trusted_metadata = {role}
const role = "CLIENT"


const Register = async () => {
    if (!email.value || !password.value || !conf_password.value){
        return alert('Please fill in all fields')
    }

    if (password.value != conf_password.value){
        return alert('Password do not match')
    }

    const res  = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
            first_name : name.first_name.value,
            last_name : name.last_name.value,
            role: trusted_metadata.role

        })
    }).then(res => res.json())
    if (res.success) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('user_id', res.user_id)
        router.push('/')
  
        window.location.reload();
    } else{
        alert(res.message)
    }
}

function togglePassword(id) {
    // get the password input field and the eye icon
    const inputPassword = document.querySelector('#' + id);
    // Toggle the type attribute using
    // getAttribure() method
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);
}
</script>

<template>

    <div id="div" class="container card" style="padding: 1%;background-color: #2A2D34;">
        <div class="row">
        <div class="container card col" style="padding: 2%;width: 40%;background-color: #588B8B;margin: 1%;">
            <form class="row g-5" @submit.prevent="Register">
            <div class="col-12 mar2">
                <p class="h2">S'enregistrer</p>
            </div>
            <div id="name" class="col-md-6 mar2">
                <div class="form-floating">
                    <input type="Name" v-model="first_name" class="form-control" id="inputFirstNameLG" placeholder="First and last name">
                    <label for="inputFirstNameLG">Prénom </label>
                </div>
            </div>
            <div  id="name" class="col-md-6 mar2">
                <div class="form-floating">
                    <input type="text" v-model="last_name" class="form-control" id="inputLastNameLG" placeholder="Phone Number">
                    <label for="inputLastNameLG">Nom</label>
                </div>
            </div>
            <div  id="dispo" class="col-12 mar2">
                <div class="form-floating">
                    <input type="email" v-model="email" class="form-control" id="inputEmailRG" placeholder="Email" >
                    <label for="inputEmailLG">Email</label>
                </div>
            </div>
            <div id="dispo" class="col-12 mar2 d-flex text-center">
                <div class="form-floating col-12">
                    <input type="password" v-model="password" class="form-control" id="inputPasswordRG" placeholder="*************" >
                    <label for="inputPassword">Mot de passe</label>
                </div>
                <i class="bi bi-eye-slash col align-self-center tglPwd" id="togglePasswordRG" @click="togglePassword('inputPasswordRG')"></i>
            </div>
            <div id="dispo" class="col-12 mar2 d-flex text-center">
                <div class="form-floating col-12">
                    <input type="password" v-model="conf_password" class="form-control" id="inputConfirmPasswordRG" placeholder="*************" >
                    <label for="inputConfirmPassword">Confirmer le mot de passe</label>
                </div>
                <i class="bi bi-eye-slash col align-self-center tglPwd" id="togglePasswordRG" @click="togglePassword('inputConfirmPasswordRG')"></i>
            </div>
            <div class="col-12">
                <button type="submit" value="Register" class="btn btn-dark btn-lg" style="background-color: #E9C46A;border-color: #588B8B;color: black;">S'enregistrer</button>
            </div>
        </form>
        <router-link to="/login" style="margin-top: 3%;color: black; margin-top: 4%;">Vous avez déjà un compte ?</router-link>
        </div>
        <div class="container col d-flex flex-column justify-content-center" style="margin: 1%;">
            <img src="../assets/logo.png" alt="logo">
        </div>
        </div>
    </div>
</template>

<style scoped>
button{
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  margin-top: -4%;
}

img{
    width: auto;
    height: 55%;
    margin-left: auto;
    margin-right: auto;
}

#name{
    margin-top: 2%;
}

#dispo{
    margin-top: 2%;
}

#div{
    margin-top: 4%;
}
</style>