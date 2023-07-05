<!-- <template>

  
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


  
</style> -->

<template>
  <div id="div0">

  <div class="div2">

    <div id="dossier">
      <h5>Dossier de:</h5>
    </div>


    <br>

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
            <td>{{ file.date }}</td>
            <td>Non</td>
          </tr>
        </tbody>
      </table>
    </div>


    <div>
      <button id="add" class="btn btn-dark btn-sm" @click="openForm">Ajouter une proposition</button>
    </div>

    <div>
      <table class="table table-bordered table-secondary" id="secondTable">
        <thead>
          <tr>
            <th scope="col">Nom Banque</th>
            <th scope="col">Taux</th>
            <th scope="col">Date</th>
            <th scope="col">Décision</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bank in banks" :key="bank.id">
            <td>{{ bank.name }}</td>
            <td>{{ bank.taux }}</td>
            <td>{{ bank.date }}</td>
            <td>Non</td>
            <td>
              <button class="btn btn-dark btn-sm" @click="deleteBank(bank)">Retirer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="send" class="btn btn-dark btn-sm" >Envoyer</button>
    </div>

    <div class="modal" :class="{ 'show': showForm }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter une proposition</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addBank">
              <div class="mb-3">
                <label for="bankName" class="form-label">Nom Banque</label>
                <input type="text" class="form-control" id="bankName" v-model="bankName" required>
              </div>
              <div class="mb-3">
                <label for="bankRate" class="form-label">Taux</label>
                <input type="text" class="form-control" id="bankRate" v-model="bankRate" required>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-dark" id="ajouter">Ajouter</button>
                <button type="button" class="btn btn-dark " @click="showForm = false">Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="input" >
      <div class="mb-3">
        <label for="formFile" class="form-label"></label>
        <input class="form-control" type="file" id="formFile" ref="fileInput" style="display: none;" @change="submitFile">
        <button id="envoyer" class="btn btn-dark btn-sm" @click="openFileInput">Ajouter un document</button>
      </div>
    </div> -->

    <!-- <div>
      <table class="table table-bordered table-secondary" id="input">
        <thead>
          <tr>
            <th scope="col">Nom Document</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in files" :key="file.name">
            <td @click="displayDocument(file.name)">{{ file.name }}</td>
            <td>{{ file.date }}</td>
            <td>
              <button class="btn btn-dark btn-sm" @click="deleteFile(file)">Retirer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="send" class="btn btn-dark btn-sm" >Envoyer</button>
    </div> -->

   

  </div>

<div class ="div1">

<h3>Stade d'avancement: </h3>
<div class="progress" style="width: 50%; margin-left: auto; margin-right: auto;">
  <div class="progress-bar progress-bar-consulted" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress1 + '%' }">Consulté</div>
  <div class="progress-bar progress-bar-send" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress2 + '%' }">Envoyé</div>
  <div class="progress-bar progress-bar-done" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress3 + '%' }">Terminé</div>
</div>

<div class="btn">
    <button type="button" class="btn btn-dark btn-sm " @click="Consulted" >Consulté</button>
    <span style="margin: 0 10px;"></span>
    <button type="button" class="btn btn-dark btn-sm " @click="Send" >Envoyé</button>
    <span style="margin: 0 10px;"></span>
    <button type="button" class="btn btn-dark btn-sm" @click="Done" >Terminé</button>
</div>

<div class="mb-3" style="padding-top: 5%; width: 30%; display: block; margin-left: auto; margin-right: auto;">
  
  <textarea class="form-control"  rows="8" placeholder="Chat" style="border: 4px solid #2A2D34; "></textarea>
  <button id="but" type="button" class="btn btn-outline-dark">Envoyer</button>
  
</div>

</div>
</div>
</template>

<script>

import axios from 'axios';

export default 

{
  data() {
  return {
    files: [],
    progress1: 0,
    progress2: 0,
    progress3: 0,
    banks: [],
    showForm: false,
    bankName: '',
    bankRate: ''
    
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

  methods: {
    Consulted() {
      this.progress1 = 15;
    },
    Send() {
      this.progress2 = 30;
    },
    Done() {
      this.progress3 = 60;
    },
    openFileInput() {
      const input = this.$refs.fileInput;
      input.click();
    },
    submitFile(event) {
      const input = event.target;
      const files = input.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileDate = new Date().toLocaleDateString();
        const fileRow = {
          name: fileName,
          date: fileDate
        };
        this.files.push(fileRow);
      }
      input.value = ''; // Réinitialiser la valeur de l'input de fichier
    },
    displayDocument(fileName) {
      console.log('Afficher le document:', fileName);
    },
    deleteFile(file) {
      const index = this.files.indexOf(file);
      if (index !== -1) {
        this.files.splice(index, 1);
      }
    },
    openForm() {
      this.showForm = true;
      setTimeout(() => {
        const input = document.getElementById('bankName');
        input.focus();
      }, 0);
    },
    addBank() {
      const bank = {
        id: Date.now(),
        name: this.bankName,
        taux: this.bankRate,
        date: new Date().toLocaleDateString()
      };
      this.banks.push(bank);
      this.bankName = '';
      this.bankRate = '';
      this.showForm = false;
    },
    deleteBank(bank) {
      const index = this.banks.indexOf(bank);
      if (index !== -1) {
        this.banks.splice(index, 1);
      }
    }
  },
}
</script>

<style scoped>
.div2 {
 
  display: block;
  margin: 5% auto;
  padding: 20px;
  width: 60%;
  float: left;
  margin-top : -6%;
  margin-bottom: auto;
}


.custom-table {
  background-color: #E9C46A;
}

.table {
  margin-top: 40px;
}

.btn {
  margin-right: 5px;
}

#send{
  background-color: #588B8B;
  color: black;
  border-radius: 10px;
  float: right;
  margin-top: -2px;
  margin-bottom: 10px;
}

#envoyer {
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  float: left;
  margin-top: 70px;
  margin-bottom: 10px;
}

#add {
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  float: left;
  margin-top: 70px;
  margin-bottom: 10px;
  
}

#ajouter{
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  float: right;
}

#dossier {
  background-color: #E9C46A;
  color: black;
  border-radius: 10px;
  float: left;
  border: 1px solid black;
  box-shadow: 0px 1px 3px black;
}

h5 {
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 6px;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.15s linear;
  
}

.modal.show {
  display: block;
}

.modal-dialog {
  position: ce;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.modal-title {
  margin-bottom: 0;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 0.5rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.progress-bar-consulted{
background-color: #E9C46A;
height: 100%;
width: 50%;
text-align: center;
}
.progress-bar-send{
background-color: #E76F51;
height: 100%;
width: 50%;
text-align: center;
}

.progress-bar-done{
background-color: #2A9D8F;
height: 100%;
width: 50%;
text-align: center;
}

h3{
  text-align: center;
  padding-top: 2%;
  color: #000000;
}

.div1
{
  border-radius: 30px;
  border: #000000 1px solid;
  background-color:#588B8B;  
  display: block;
  margin-left: 60%; 
  margin-right: 60%;
  margin-top: 7%;
  margin-bottom: 7%;
  width: 35%;
}

.btn{
  border-radius: 30px;
}

#but{
    margin-top: 10px;
    margin-bottom: 10px;
  }

.div0{
  width: 90%
}


</style>



