<template>
    <div style="display: flex; flex-direction:column ;background-color: #588B8B;padding: 5%;" >
      <div style="margin-bottom: 5%; color: black;">
        <h1>Menu des Dossiers à traiter</h1>
      </div>
      <!-- modele card dossier du point de vue courtier -->
      <div name="Dossier-Client" class="dossier-client">
          <div class="dossier-details">
            <div style="width:55%;">
              <DCardClient></DCardClient>
            </div> 
            <!-- cette carte ci-dessous est le futur-bouton vers le dossier detaillé-->
            <div style="width: 45%;">
              <DCardContent></DCardContent>
            </div>
          </div>
          <div style="width:25%;">
              <DCardSuivi></DCardSuivi>
          </div>
      </div>
    </div>
</template>
<style scoped>
  .dossier-client {
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    height: 150px;
    background: white; 
    border: 2px solid black;
    border-radius: 20px;
    margin-bottom: 5%;
  }
  .dossier-details{
    width: 75%;
    height: 175%;
    padding: 0% 2%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color:white;
    border:3px solid black;
    border-radius: 20px;
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
    }
  }
</script>
 
