<template>

  
    <div id="div1">

        <DTable>

        </DTable>
        
        <DCard>

        </DCard>
    </div>
  
</template>

<script>
// @ is an alias to /src
import DTable from '@/components/Dossier/DTable.vue'
import DCard from '@/components/Dossier/DCard.vue'
import axios from 'axios';


export default 
{
  name: 'CDossier',
  components: {
    DCard,
    DTable    
  },
  async created() {
    const dossierId = this.$route.params.dossierId;
    try {
      const response = await axios.get(`http://localhost:3000/api/documents/userDocuments?dossierId=${dossierId}`);
            this.document = response.data;
        } catch (error) {
            console.log(error);
        }
  },
  data(){
    return{
      files: [],
    }
  }

}
</script>

<style scoped>


  
</style>
