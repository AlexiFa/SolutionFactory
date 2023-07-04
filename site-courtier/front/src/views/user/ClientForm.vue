<template>
    <div class="container-fluid">
        
        <br><br><br>

        <div class="container-card">
            <h1 class="text-center">Nouveau dossier</h1>
            <br>
            <div class="row">
                <div class="col">
                
                </div>
                <div class="col-8">
                    <form class="row g-3" @submit.prevent="submitForm">
                        
                        <div class="col-12">
                            
                            <label for="inputAddress" class="form-label"><strong>Adresse</strong></label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Adresse" v-model="form.address">
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"><strong>Complément d'adresse</strong></label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Appartement, studio, ou étage" v-model="form.compladdress">
                        </div>
                        <div class="col-md-5" >
                            <label for="inputCity" class="form-label" ><strong>Ville</strong></label>
                            <input type="text" class="form-control" id="inputCity" v-model="form.ville">
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label"><strong>Département</strong></label>
                            <select id="inputState" class="form-select" v-model="form.departement">
                            <option selected>Choose...</option>
                            <option>Auvergne-Rhône-Alpes</option>
                            <option>Bourgogne-Franche-Comté</option>
                            <option>Bretagne</option>
                            <option>Centre-Val de Loire</option>
                            <option>Corse</option>
                            <option>Grand-Est</option>
                            <option>Guadeloupe</option>
                            <option> Guyane</option>
                            <option>Hauts-de-France</option>
                            <option>Île-de-France</option>
                            <option>La Réunion</option>
                            <option>Martinique</option>
                            <option>Mayotte</option>
                            <option>Normandie</option>
                            <option>Nouvelle-Aquitaine</option>
                            <option>Occitanie</option>
                            <option>Pays de la Loire</option>
                            <option>Provence-Alpes-Côte d'Azur</option>>
                            </select>
                            <br>
                        </div>
                        <div class="col-md-3">
                            <label for="inputZip" class="form-label"><strong>Code Postale</strong></label>
                            <input type="text" class="form-control" id="inputZip" v-model="form.codepostal">
                        </div>
                        <div class="col-md-5" style="margin-left: auto; margin-right: auto; margin-top: -1%;">
                            <label for="inputNum" class="form-label"><strong>N° Téléphone</strong></label>
                            <input type="text" class="form-control" id="inputNum" placeholder="xx xx xx xx xx" v-model="form.telefone">
                        </div>

                        <div class="mb-1">
                            <label for="formFileMultiple" class="form-label"><strong>Justificatif d'identité</strong> (pièce d'identité recto/verso / Passeport)</label>
                            <input class="form-control" v-on:change="handleFileUpload($event)" type="file" id="idcard" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                        </div>
                        <div class="mb-2">
                            <label for="formFileMultiple" class="form-label"><strong>Justificatif de Domicile</strong> (datant de moins de 3 mois) </label>
                            <input class="form-control" v-on:change="handleFileUpload($event)" type="file" id="domicile" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                        </div>
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label"><strong>2 derniers avis d'imposition</strong></label>
                            <input class="form-control" v-on:change="handleFileUpload($event)" type="file" id="impot" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                        </div>
                        <div class="mb-4">
                            <label for="formFileMultiple" class="form-label"><strong>3 derniers bulletins de salaire</strong></label>
                            <input class="form-control" v-on:change="handleFileUpload($event)" type="file" id="bulsalaire" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                        </div>
                        <div class="mb-5">
                            <label for="formFileMultiple" class="form-label"><strong>3 derniers relevés de compte en banque</strong></label>
                            <input class="form-control" v-on:change="handleFileUpload($event)" type="file" id="relevecompte" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                        </div>

                        <div class="col-12">
                            <button id="send" type="submit" class="btn btn-dark" >Envoyer</button>
                        </div>
                        <br>
                    </form>

                   

                </div>
                <div class="col">
                
                </div>
            </div>

        </div>

        <br><br><br>
        
    </div>

</template>
  

<script>
export default {
    data() {
        return {
            form: {
                address: '',
                compladdress: '',
                ville : '',
                departement: '',
                codepostal: '',
                telefone: '',
            },
            files: {
                idcard: null,
                domicile: null,
                impot: null,
                bulsalaire: null,
                relevecompte: null
            },
        };
    },
    methods: {
        handleFileUpload(event) {
            const { id, files } = event.target;
            this.files[id] = files[0];  
        },
        async submitForm() {

            const formData = new FormData();

            
            for (const [key, value] of Object.entries(this.form)) {
                formData.append(key, value);
            }

            
            for (const [key, file] of Object.entries(this.files)) {
                if (file) {
                    formData.append(key, file);
                }
            }

           
            try {
                const response = await fetch('http://localhost:3000/api/forms/submitForm', {
                    method: 'POST',
                    headers: {
                        'X-User-Id': localStorage.getItem('user_id')  
                    },
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        },

    },
};
</script>



<style scoped>

    .container-card {
        margin-left: 20%;
        margin-right: 20%;
        padding: 2%;
        background-color: white;
        border-radius: 10px;
    }

   .container-fluid{
    background-color: #E9C46A;


   }

    #send {
        background-color: #588B8B;
        color: black;
        border-color: #2A2D34;
        margin-top: -10%;
    }

 

</style>