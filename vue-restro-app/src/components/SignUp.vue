<template>
<div> 

    <img src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-21.png" class="logo" />
    <h1>Sign Up</h1>

<div class="register">
<input type="text" v-model="name" placeholder="Enter the name"  />   
<input type="email" v-model="email" placeholder="Enter the email"  />  
<input type="password" v-model="password" placeholder="Enter the password"  />   

<button v-on:click="signUp">Sign Up</button>

<p>
    <router-link to="/login">Login</router-link>
</p>
</div>

</div>

</template>


<script>

import axios from 'axios'

export default{
    name:"SignUp",
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },

    methods: {
       async signUp(){
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            }) 

            if(result.status === 201){
                localStorage.setItem('user-info',JSON.stringify(result.data))
                this.$router.push({name:"HomePage"})
            }
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:"HomePage"})
        }
    },

}
</script>

<style>
.logo{
    width: 100px;
}
.register input, .login input, .addRes input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-top: 2px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid green;
}

.register button, .login button, .addRes button{
    width: 320px;
    height: 40px;
    border:1px solid green;
    background: green;
    color: white;
    cursor: pointer;
}
</style>