<template>
    <div style >
    <div style="display: flex;">
        <div>
            <DCardSimple></DCardSimple>
        </div>
        <div>
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
  
