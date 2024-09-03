<template>
 <div>
    <img src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-21.png" class="logo" />
    <h1>Login</h1>

<div class="login">
  
<input type="email" v-model="email" placeholder="Enter the email"  />  
<input type="password" v-model="password" placeholder="Enter the password"  />   

<button v-on:click="login">Login</button>

<p>
    <router-link to="/sign-up">SignUp</router-link>
</p>
 </div>
 </div>
</template>

<script>
import axios from 'axios'

export default{
    name:"LoginPage",
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
       async login(){
        let loggedInUser = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

        console.log(loggedInUser)
        if(loggedInUser.status === 200 && loggedInUser.data.length > 0){
            localStorage.setItem('user-info',JSON.stringify(loggedInUser.data[0]))
            this.$router.push('/')
        }
        }
    },
}
</script>