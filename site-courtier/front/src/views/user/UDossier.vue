<template>

    <div class="div2"> 
      <div class="col1">
      <div id="doc">
        <h4>Mes documents</h4>
      </div>

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
      
      <div id="doc">
        <h4>Mes propositions</h4>
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

      <div class="div1">
        <div class="mb-3" style="padding-top: 5%; width: 30%; display: block; margin-left: auto; margin-right: auto;">
          <h3>Messagerie </h3>
          <textarea class="form-control"  rows="8" placeholder="Chat" style="border: 4px solid #2A2D34; "></textarea>
          <button id="but" type="button" class="btn btn-outline-dark">Envoyer</button>
         </div>
      </div>



    </div>    
    
    
   
    
     
    
  </template>
  
  <script>

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
    width:90%;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 60px;
    margin-bottom: 100px;
    display: flex;
  }

  .div1
{
  border-radius: 30px;
  border: #000000 1px solid;
  background-color:#588B8B;  
  margin-top: 7%;
  margin-bottom: 7%;
  width: 50%;
  margin-left: 5%;
}
.col1{
  width: 100%;
  margin-right: 5%;
} 

  #input{
    margin-bottom: 10%;
  }
  
  #tab2{
    margin-top: 50px;
  }

  #doc{
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  float: left;
  border: 1px solid black;
  box-shadow: 0px 1px 3px black;
  padding: 5px;
  margin-bottom: 20px;
  }
  
  #but{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h3{
    text-align: center;
  padding-top: 2%;
  color: #000000;
  }
  
  </style>
 
