<template>

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


    <div class="input" >
      <div class="mb-3">
        <label for="formFile" class="form-label"></label>
        <input class="form-control" type="file" id="formFile" ref="fileInput" style="display: none;" @change="submitFile">
        <button id="envoyer" class="btn btn-dark btn-sm" @click="openFileInput">Ajouter un document</button>
      </div>
    </div>

    <div>
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
    </div>

   

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      files: [],
      banks: [],
      showForm: false,
      bankName: '',
      bankRate: ''
    };
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
  methods: {
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
  }
};
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


</style>
