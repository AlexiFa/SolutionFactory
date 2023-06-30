<template>
    <div style="background-color: #E9C46A;padding: 5%;" >
        <div name="Dossier-Client" class="dossier-client">
          <div class="dossier-details">
            <div style="width:100%;">
              <DCardClient></DCardClient>
            </div> 
            <div style="width: 100%;">
              <DCardContent></DCardContent>
            </div>
          </div>
          <div style="width:35%;">
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
    height: 125px;
    background: white; 
    border: 2px solid black;
    border-radius: 20px;
  }
  .dossier-details{
    width: 65%;
    display: flex;
    flex-direction: row;
    border:2px solid black;border-radius: 20px;
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
      DCardSuivi, DCardContent, DCardClient
    }
  }
  </script>