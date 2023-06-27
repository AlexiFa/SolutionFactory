<script setup>

import {ref} from 'vue' 
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')

const Login = async () => {
    if (!email.value || !password.value){
        return alert('Please fill in all fields')
    }



    const res  = await fetch('http://localhost:3000/login', {
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
        router.push('/')
    } else{
        alert(res.message)
    }
}
</script>

<template>
    <!--<div class="ellipse1"></div>
    <div class="ellipse2"></div>-->
    <div class="container card" style="padding: 1%;background-color: #2A2D34;">
        <div class="row">
        <div class="container col d-flex flex-column justify-content-center" style="margin: 1%;">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="container card col" style="padding: 2%;width: 40%;background-color: #588B8B;margin: 1%;">
            <form class="row g-5" @submit.prevent="Login">
                <div class="col-12 mar">
                    <p class="h1">Login</p>
                </div>
                <div class="col-12 mar">
                    <div class="form-floating">
                        <input type="email" v-model="email" class="form-control" id="inputEmailLG" placeholder="Email">
                        <label for="inputEmailLG">Email</label>
                    </div>
                </div>
                <div class="col-12 mar">
                    <div class="form-floating">
                        <input type="password" v-model="password" class="form-control" id="inputPasswordLG" placeholder="Password">
                        <label for="inputPassword">Password</label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" value="Login" class="btn btn-primary fs-2" style="background-color: #E9C46A;border-color: #588B8B;color: black;">Sign in</button>
                </div>
            </form>
            <router-link to="/register" style="margin-top: 3%;color: black;">Register</router-link>
        </div>
        </div>
    </div>
</template>