<template>
    <div style="background-color: #588B8B;padding: 5%;" >
      <div name="Dossier-Client" style="display: flex; align-items: center;justify-content: space-between;">
          <div style="width:25%;">
              <DCardSimple></DCardSimple>
          </div>
          <div style="width:70%;">
              <DCardDossier></DCardDossier>
          </div>   
      </div>
    </div>
</template>
  
  <script>
  // @ is an alias to /src
  import DCardSimple from '@/components/Dashboard/DCardSimple.vue'
  import DCardDossier from '@/components/Dashboard/DCardDossier.vue'
  export default {
    name: 'CDashboard',
    components: {
      DCardSimple, DCardDossier
    }
  }
  </script>
  
