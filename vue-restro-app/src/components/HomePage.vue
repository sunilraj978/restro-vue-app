<template>
    <div>
        <HeaderPage />
        <h1>Welcome to homePage, {{ name }}</h1>   

        <table border="2">
            
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Actions</td>
            </tr>

            <tr v-for="item in restrauntData" :key="item.id">
                <td>
                    {{ item.id }}
                </td>
                <td>
                    {{ item.name }}
                </td>
                <td>
                    {{ item.contact }}
                </td>
                <td>
                    {{ item.address }}
                </td>
                <td class="buttons">
                    <router-link v-bind:to="'/update-res/'+item.id">
                    <button>Update</button>
                    </router-link>
                    <button type="button" v-on:click="deleteItem(item.id)">Delete</button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default{
    name:"HomePage",
    components:{
        HeaderPage
    },
    data(){
        return{
            name:'',
            restrauntData :[],
        }
    },
    methods:{
        async deleteItem(id){
            let restrauntData = await axios.delete("http://localhost:3000/restaurant/"+id)
            if(restrauntData.status === 200){
                this.loadData()
            }
        },
        

        async loadData(){
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name:"SignUp"})
            }

        let restrauntData = await axios.get("http://localhost:3000/restaurant")
        this.restrauntData = restrauntData.data
        console.log(this.restrauntData)
    },
    },

   async mounted() {
        this.loadData()
    },

}
</script>


<style scoped>


td{
    width: 160px;
    height: 40px;
}

.buttons button {
    margin: 5px;               
    padding: 10px 20px;        
    background-color: #7FFFD4;
    color: #000000;
    border: none;    
    border-radius: 5px;
    font-size: 16px;   
    cursor: pointer;   
    transition: background-color 0.3s ease;
}

.buttons button:hover {
    background-color: #66CDAA;
}
</style>