<template>
    <div style="display: flex;">
        <div>
            <DCardSimple></DCardSimple>
        </div>
        <div>
            <DCardDossier></DCardDossier>
        </div>
        
    </div>
</template>
  
  <script>
  // @ is an alias to /src
  import DCardSimple from '@/components/DCardSimple.vue'
  import DCardDossier from '@/components/DCardDossier.vue'
  export default {
    name: 'CDashboard',
    components: {
      DCardSimple, DCardDossier
    }
  }
  </script>
  
