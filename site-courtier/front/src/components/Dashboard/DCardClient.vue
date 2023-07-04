<template>
        <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content:space-between; height:100%;">
            <h3 style="margin-top: 10%;">Client: </h3><p>{{ dossier.id_User }}</p><!--<p>{{ client.id_User }}</p>-->
        </div>
</template>

<script>
/*import axios from 'axios'
import User from '../../../../back/src/models/User'*/
export default {
    name: 'DCardClient',
    props: ['dossier'],
    /*data(){
        return{
            client: User
        }
    },
    mounted(){
        this.getClient()
    },
    methods: {
        getClient(){
            axios.get(`http://localhost:3000/api/user/`+this.dossier.id_User).then(response => {
                this.client = response.data
                console.log(response.data)
              }).catch(error => {
                console.log(error)
              });
        }
    }*/
}
</script>