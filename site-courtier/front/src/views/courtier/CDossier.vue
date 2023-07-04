<template>

  
    <div id="div1">
        <DTable>

        </DTable>
        <DCard>

        </DCard>

        <div>
          <table class="table table-bordered table-secondary" id="secondTable">
            <thead>
              <tr>
                <th scope="col">Colonne1</th>
                <th scope="col">Colonne2</th>
                <th scope="col">Colonne3</th>
                <th scope="col">Colonne4</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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
