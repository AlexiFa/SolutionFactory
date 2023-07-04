<template>
    <div style="display: flex; flex-direction:column ;background-color: #588B8B;padding: 5%;" >
      <div style="margin-bottom: 5%; color: black;">
        <h1>Dossiers à traiter</h1>
      </div>
      <!-- modele card dossier du point de vue courtier -->
      <div v-for="item in items" :key="item.id">
      <div name="Dossier-Client" class="dossier-client">
        <div style="width:30%;">
            <DCardClient :dossier="item"/>
        </div> 
        <div style="width:30%;">
            <DCardSuivi></DCardSuivi>
        </div>
        <!-- cette carte ci-dessous est le futur-bouton vers le dossier detaillé-->
        <div class="btn dossier-details" role="button" @click="$router.push({ name: 'CDossier', params: { dossierId: item.Id_Dossier } })">
            <DCardContent></DCardContent>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import DCardSuivi from '@/components/Dashboard/DCardSuivi.vue'
  import DCardClient from '@/components/Dashboard/DCardClient.vue'
  import DCardContent from '@/components/Dashboard/DCardContent.vue'
  import axios from 'axios'
  export default {
    name: 'CDashboard',
    components: {
      DCardSuivi, DCardClient, DCardContent
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
        axios.get('http://localhost:3000/api/dossier/getdossiercourtier').then(response => {
          this.items = response.data
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        });
      }
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


 