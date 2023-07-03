<template>
    <div style="display: flex; flex-direction:column ;background-color: #588B8B;padding: 5%;" >
      <div style="margin-bottom: 5%; color: black;">
        <h1>Menu des Dossiers à traiter</h1>
      </div>
      <!-- modele card dossier du point de vue courtier -->
      <div name="Dossier-Client" class="dossier-client">
        <div style="width:30%;">
            <DCardClient></DCardClient>
        </div> 
        <div style="width:30%;">
            <DCardSuivi></DCardSuivi>
        </div>
        <!-- cette carte ci-dessous est le futur-bouton vers le dossier detaillé-->
        <div class="btn dossier-details" role="button" onclick="window.location.href='/CDossier'">
            <DCardContent></DCardContent>
        </div>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
</template>
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

<script>
  // @ is an alias to /src
  import DCardSuivi from '@/components/Dashboard/DCardSuivi.vue'
  import DCardClient from '@/components/Dashboard/DCardClient.vue'
  import DCardContent from '@/components/Dashboard/DCardContent.vue'
  export default {
    name: 'CDashboard',
    components: {
      DCardSuivi, DCardClient, DCardContent
    },
    data() {
      return {
        items: [
          { id: 1, name: 'Bruce Lee' },
          { id: 2, name: 'Jackie Chan' },
          { id: 3, name: 'Chuck Norris' },
          { id: 4, name: 'Jet Li' },
          { id: 5, name: 'Kung Fury' }
        ]
      }
    },
    mounted() {
      this.fetchDossiers()
    },
    methods: {
      fetchDossiers() {
        // put the code to get the dossier from the local database
        // create a route for dossier : '/getDossier'
        // create a controller for dossier and a function to get the dossier when we call /getDossier
      }
    }
  }
</script>
 
