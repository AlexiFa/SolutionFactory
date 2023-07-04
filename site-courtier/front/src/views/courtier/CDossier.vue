<template>

  
    <div id="div1">
        <DTable>

        </DTable>
        <DCard>

        </DCard>

      <div >
        <table class="table table-bordered table-secondary empty-table">
          <thead>
            <tr>
              <th scope="col">Column 1</th>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
              <th scope="col">Column 4</th>
            </tr>
          </thead>
          <tbody>
            <!-- No rows here as it's an empty table -->
          </tbody>
        </table>
      </div>
    </div>
  

   
  
</template>

<script>
// @ is an alias to /src
import DTable from '@/components/Dossier/DTable.vue'
import DCard from '@/components/Dossier/DCard.vue'

export default 
{
  name: 'CDossier',
  components: {
    DCard,
    DTable    
  },
}
</script>

<style scoped>

#div1{
  margin-bottom: 9%;
}

.table{
  width:50%;
  margin-left: auto;
  margin-right: auto;
}
  
</style>
