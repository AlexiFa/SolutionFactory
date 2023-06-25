<template>
    <div style="background-color: #588B8B;padding: 5%;" >
      <div name="Dossier" style="display: flex; border : 1px solid black;">
          <div style="width:20%;">
              <DCardSimple></DCardSimple>
          </div>
          <div style="width:60%;">
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
  
