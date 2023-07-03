<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
            
            </div>
            <div class="col-8">
                <form class="row g-3" @submit.prevent="submitForm">
                    
                    <div class="col-12">
                        <br><br><br>
                        <label for="inputAddress" class="form-label"><strong>Addresse</strong></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label"><strong>Complément d'addresse</strong></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartement, studio, ou étage">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label"><strong>Ville</strong></label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label"><strong>Département</strong></label>
                        <select id="inputState" class="form-select">
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
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label"><strong>Code Postale</strong></label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-md-5">
                        <label for="inputNum" class="form-label"><strong>N° Téléphone</strong></label>
                        <input type="text" class="form-control" id="inputNum">
                    </div>

                    <div class="mb-1">
                        <label for="formFileMultiple" class="form-label"><strong>Justificatif d'identité</strong> (pièce d'identité recto/verso / Passeport)</label>
                        <input class="form-control" v-on:change="handleFileUpload()" type="file" id="idcard" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                    </div>
                    <div class="mb-2">
                        <label for="formFileMultiple" class="form-label"><strong>Justificatif de Domicile</strong> (datant de moins de 3 mois) </label>
                        <input class="form-control" v-on:change="handleFileUpload()" type="file" id="domicile" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label"><strong>2 derniers avis d'imposition</strong></label>
                        <input class="form-control" v-on:change="handleFileUpload()" type="file" id="impot" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                    </div>
                    <div class="mb-4">
                        <label for="formFileMultiple" class="form-label"><strong>3 derniers bulletins de salaire</strong></label>
                        <input class="form-control" v-on:change="handleFileUpload()" type="file" id="bulsalaire" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                    </div>
                    <div class="mb-5">
                        <label for="formFileMultiple" class="form-label"><strong>3 derniers relevés de compte en banque</strong></label>
                        <input class="form-control" v-on:change="handleFileUpload()" type="file" id="relevecompte" multiple accept=".pdf,.jpg,.jpeg,.png,.odt,.doc " />
                    </div>


                    <div class="col-12">
<<<<<<< Updated upstream
                        <button type="submit" class="btn btn-primary" >Envoyer</button>
=======
                        <button  v-on:click="submitForm()" class="btn btn-primary">Envoyer</button>
>>>>>>> Stashed changes
                    </div>
                    <br>
                </form>


            </div>
            <div class="col">
            
            </div>
        </div>
    </div>

</template>
<<<<<<< Updated upstream
  

<script>
export default {
    data() {
        return {
            form: {
                address: '',
                // Más campos...
            },
        };
    },
    methods: {
        async submitForm() {
            // Aquí es donde vas a enviar los datos a tu back-end
        },
    },
};
</script>
=======

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const address = ref('')
const phoneNumber = ref('')
const file = ref(null)

const handleFileUpload = () => {
  file.value = event.target.files[0]
}

const submitForm = async () => {
  if (!address.value || !phoneNumber.value || !file.value) {
    return alert('Veuillez remplir tous les champs')
  }

  const formData = new FormData()
  formData.append('address', address.value)
  formData.append('phoneNumber', phoneNumber.value)
  formData.append('file', file.value)

  try {
    const response = await fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      alert('Formulaire soumis avec succès')
      router.push('/')
    } else {
      alert('Une erreur est survenue lors de la soumission du formulaire')
    }
  } catch (error) {
    console.error(error)
    alert('Une erreur est survenue lors de la soumission du formulaire')
  }
}
</script>
  
>>>>>>> Stashed changes
