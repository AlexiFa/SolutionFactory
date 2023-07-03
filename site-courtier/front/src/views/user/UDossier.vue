<template>
    <div class="btn" role="button" onclick="window.location.href='/UDashboard'">
        Retour a UDashboard 
    </div>
    <div>
      <DCard>
        
      </DCard>
  
      <DTable>
        
      </DTable>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import DCardfrom '@/components/Dossier/DCard.vue'
  import DTable from '@/components/Dossier/DTable.vue'
  
  export default 
  {
    name: 'CDossier',
    components: {
      DCard,
      DTable    
    },
  }
  </script>
 
