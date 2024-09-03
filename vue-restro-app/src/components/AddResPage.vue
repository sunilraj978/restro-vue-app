<template>
    <div>
        <HeaderPage />
        <h1>Welcome, to AddResPage</h1>
        <form class="addRes">
        <input type="text" name="resName" placeholder="Enter restaurant Name" v-model="name" />
        <input type="number" name="contact" placeholder="Enter Contact Number" v-model="contact" />     
        <input type="text" name="address" placeholder="Enter Address Details" v-model="address" /> 

        <button type="button" v-on:click="addResDetails">Add Restrauant</button>

        </form>   
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios';
export default{
    name:"AddResPage",
    components:{
        HeaderPage
    },
    data(){
        return{
            name:'',
            contact:'',
            address:''
        }
    },
    methods:{
       async addResDetails(){
            let addRes = await axios.post("http://localhost:3000/restaurant",{
                name:this.name,
                address:this.address,
                contact:this.contact
            })

            if(addRes.status === 201){
                this.$router.push('/')
            }

            this.name=''
            this.contact=''
            this.address=''
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:"SignUp"})
        }
    },
}
</script>