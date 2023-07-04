<template>
    <div style="display: flex; flex-direction:column ;background-color: #E9C46A;padding: 5%;" >
        <div style="margin-bottom: 5%; color: black;">
          <h1>Dossiers en cours de traitement</h1>
        </div>
        <!-- modele card dossier du point de vue client -->
        <div v-for="item in items" :key="item.id">

          <div name="Dossier-Client" class="dossier-client">
            
            <div style="width:30%;">
                <DCardTitleDos :dossier="item"></DCardTitleDos>
            </div> 
            <div style="width:30%;">
                <DCardSuivi></DCardSuivi>
            </div>
            <!-- cette carte ci-dessous est le futur-bouton vers le dossier detaillé-->
            <div class="btn dossier-details" role="button" @click="$router.push({ name: 'UDossier', params: { dossierId: item.Id_Dossier } })">
                <DCardContent></DCardContent>
            </div>
          
          </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import DCardSuivi from '@/components/Dashboard/DCardSuivi.vue'
import DCardTitleDos from '@/components/Dashboard/DCardTitleDos.vue'
import DCardContent from '@/components/Dashboard/DCardContent.vue'
import axios from 'axios'
export default {
  name: 'CDashboard',
  components: {
    DCardSuivi, DCardContent, DCardTitleDos
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.fetchDossiers()
  },
  methods: {
    fetchDossiers() {
      const user_id = localStorage.getItem('user_id')
      axios.get(`http://localhost:3000/api/dossier/getdossierclient?user_id=${user_id}`).then(response => {
        console.log(response.data);
        this.items = response.data
  
      }).catch(error => {
        console.log(error)
      });
    },
  }
}
</script>

<style scoped>
.dossier-client {
  display: flex; 
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between; 
  height: 200px;
  padding: 0% 0% 0% 2%;
  background: white; 
  border: 2px solid black;
  border-radius: 20px;
  margin-bottom: 5%;
}
.dossier-details{
    height: 100%;
    width: 30%;
    border-left: 1px solid;
    border-radius: 0px;
  }
  .dossier-details:hover{
    background-color:white;
    border:3px solid black;
    border-radius: 0px;
  }
</style>

