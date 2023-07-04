<template>
    <!---<div class="btn" role="button" onclick="window.location.href='/UDashboard'"> -->
    <div class="div2"> 

        <div>
          <table class="table table-bordered table-secondary" id="input">
            <thead>
              <tr>
                <th scope="col">Nom Document</th>
                <th scope="col">Date</th>
                <th scope="col">Consulté</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="file in files" :key="file.name">
                <td>
                  <a :href="`http://localhost:3000/api/documents/serveDocument/${file.id_Documents}`" target="_blank">{{ file.file_name }}</a>
                </td>
                <td></td>
                <td>
                  <button class="btn btn-dark btn-sm">Consulter</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      

      <div id="tab2">
        <table class="table table-bordered table-secondary" id="secondTable">
          <thead>
            <tr>
              <th scope="col">Nom Banque</th>
              <th scope="col">Taux</th>
              <th scope="col">Date</th>
              <th scope="col">Décision</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bank in banks" :key="bank.id">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button class="btn btn-dark btn-sm">Accepter</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
    <!---</div>-->
   
    
     
    
  </template>
  
  <script>
  // @ is an alias to /src
  //import DCard from '@/components/Dossier/DCard.vue'
  //import DTable from '@/components/Dossier/DTable.vue'
  import axios from 'axios';
  import UDashboard from './UDashboard.vue';
  export default 

  {
    data() {
    return {
      files: [],
      items: UDashboard.data.items
      
    }},

    name: 'CDossier',
    components: {
         
    },
    
    async created() {
      const dossierId = this.$route.params.dossierId;
    try {
          const response = await axios.get(`http://localhost:3000/api/documents/userDocuments?dossierId=${dossierId}`);
          this.files = response.data;
        } catch (error) {
          console.log(error);
        }
    },
  }
  </script>

  <style scoped>
  
  .div2 {
    width:50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    margin-bottom: 100px;
  }

  #tab2{
    margin-top: 50px;
  }

  
  
  </style>
 
