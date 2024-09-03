<template>
    <div>
        <HeaderPage />
        <h1>Welcome, to UpdateRestrauant Page</h1>
        <form class="addRes">
        <input type="text" name="resName" placeholder="Enter restaurant Name" v-model="name" />
        <input type="number" name="contact" placeholder="Enter Contact Number" v-model="contact" />     
        <input type="text" name="address" placeholder="Enter Address Details" v-model="address" /> 

        <button type="button" v-on:click="UpdateResDetails">Update Restrauant</button>

        </form>   
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios';
export default{
    name:"UpdateResPage",
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
        async UpdateResDetails() {
            const updatedPostData = {
                name: this.name,
                contact: this.contact,
                address: this.address
            };
            const postId = this.$route.params.id;
            let result = await axios.put("http://localhost:3000/restaurant/" +postId, updatedPostData)

            if(result.status === 200){
                this.$router.push('/')
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:"SignUp"})
        }

        const addRes = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
        this.name = addRes.data.name,
        this.address = addRes.data.address,
        this.contact = addRes.data.contact
    },
}
</script>