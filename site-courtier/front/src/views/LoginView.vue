<script setup>
import { ref, provide } from 'vue' 
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')
const isLoggedIn = ref(!!localStorage.getItem('token')) 

provide('isLoggedIn', isLoggedIn); 

const Login = async () => {
    if (!email.value || !password.value){
        return alert('Please fill in all fields')
    }

    const res  = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    }).then(res => res.json())
    if (res.success) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('user_id', res.user_id)
        
        isLoggedIn.value = true; 
        router.push('/')
        setTimeout(() => {
            window.location.reload();        
        }, 300);
    
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

    <div class="container" >
        <div class="row">
        <div class="container col d-flex flex-column justify-content-center" style="margin: 1%;">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div id="card" class="container card col" style="padding: 2%;width: 40%;background-color: #588B8B;margin: 1%;">
            <form class="row g-5" @submit.prevent="Login">
                <div class="col-12 mar">
                    <p class="h2">Se connecter</p>
                </div>
                <div class="col-12 mar">
                    <div id="dispo" class="form-floating">
                        <input type="email" v-model="email" class="form-control" id="inputEmailLG" placeholder="Email" >
                        <label for="inputEmailLG">Email</label>
                    </div>
                </div>
                <div id="dispo2" class="col-12 mar d-flex text-center">
                    <div class="form-floating col-12">
                        <input type="password" v-model="password" class="form-control" id="inputPasswordLG" placeholder="Password" >
                        <label for="inputPassword">Mot de passe</label>
                    </div>
                    <i class="bi bi-eye-slash col align-self-center tglPwd" id="togglePasswordRG" @click="togglePassword('inputPasswordLG')"></i>
                </div>
                <div class="col-12">
                    <button type="submit" value="Login" class="btn btn-dark btn-lg " style="background-color: #E9C46A;border-color: #588B8B;color: black;">Se connecter</button>
                </div>
            </form>
            <router-link to="/register" style="margin-top: 3%;color: black;">S'enregistrer</router-link>
        </div>
        </div>
    </div>
</template>

<style scoped>
button{
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  margin-top: -15%;
}

img{
    width: auto;
    height: 60%;
    margin-left: auto;
    margin-right: auto;
}

.container{
    margin-top: 4%;
    padding: 1%;
    background-color: #2A2D34;
}

#dispo{
    margin-top: -13%;
    
}

#dispo2{
    margin-top: -3%;
}



</style>