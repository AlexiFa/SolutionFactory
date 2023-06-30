<template>
    <div style="background-color: #E9C46A;padding: 5%;" >
        <!-- modele card dossier du point de vue client -->
        <div name="Dossier-Client" class="dossier-client">
            <div class="dossier-details">
            <div style="width:60%;">
                <DCardClient></DCardClient>
            </div> 
            <div style="width: 40%;">
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
  border:2px solid black;
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
      DCardSuivi, DCardContent, DCardClient
    }
  }
  </script>