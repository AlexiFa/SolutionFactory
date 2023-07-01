<template>
    <div class="btn" role="button" onclick="window.location.href='/UDashboard'">
        Retour a UDashboard 
    </div>
    <div>
      <DCardCopie>
        
      </DCardCopie>
  
      <DTableCopie>
        
      </DTableCopie>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import DCardCopie from '@/components/Dossier/Visu-Client/DCardCopie.vue'
  import DTableCopie from '@/components/Dossier/Visu-Client/DTableCopie.vue'
  
  export default 
  {
    name: 'CDossier',
    components: {
      DCardCopie,
      DTableCopie    
    },
  }
  </script>
  