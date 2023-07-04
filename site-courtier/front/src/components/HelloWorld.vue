<template>
  <div id="container" class="container text-center">
    <div class="row" style="margin-top: 30px;">
      <div class="col-8" style="margin-top: 4rem;">
        <h1 id="titre">{{ msg }}</h1>
      </div>
      <div class="col">
        <img id="imgLogo" src="../assets/logoFull.png" alt="Logo OpticGestion" style="width: 100%;height: fit-content; border: 1px solid black; border-radius: 10px;;">
      </div>
    </div>
    <br><br><br>
    
    <div class="cards">
      <!-- Premiere ligne -->
        <div class="btn card mb-3 card-jaune immo " role="button">
          <div class="row g-0" >
            <div class="col-md-4">
              <img src="../assets/pretImmo.jpeg" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Crédit Immobilier</h5>
                <p class="card-text">Réalisez votre rêve de devenir propriétaire. Au-delà du simple financement de votre achat immobilier, nous vous guidons tout au long du processus pour vous obtenir le prêt immobilier le plus adapté à vos besoins</p>
                <p class="card-text"><small class="text-body-secondary">Faire Simulation</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-bleu">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/pretConso.png" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem; transform: scaleX(-1);">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Crédit Consommation</h5>
                <p class="card-text">Faites-vous plaisir ou faites face aux imprévus de la vie. Nous sommes là pour vous aider à financer vos projets et besoins quotidiens en vous orientant vers le crédit à la consommation le plus avantageux pour vous.</p>
                <p class="card-text"><small class="text-body-secondary">Faire Simulation</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-jaune">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/pretVoiture.png" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Crédit Voiture</h5>
                <p class="card-text">Offrez-vous le véhicule que vous désirez. Nous ne nous contentons pas de vous aider à financer votre achat, nous vous accompagnons également pour trouver le crédit auto avec les meilleures conditions</p>
                <p class="card-text"><small class="text-body-secondary">Faire Simulation</small></p>
              </div>
            </div>
          </div>
        </div>
      <!-- Deuxieme ligne -->
      <div class="card mb-3 card-bleu">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../assets/creditEtudiant.png" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Crédit Étudiant</h5>
              <p class="card-text">Financez vos frais de scolarité, votre matériel informatique, votre logement, vos transports, et plus encore. Nous allons pas seulement vous aider à trouver les moyens de couvrir ces coûts, mais aussi de vous accompagner dans vos démarches
              </p>
              <p class="card-text"><small class="text-body-secondary">Faire Simulation</small></p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3  card-jaune">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../assets/pretAssu.png" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Crédit Assurance</h5>
              <p class="card-text">Protégez-vous contre les aléas de la vie. Nous ne faisons pas que vous aider à couvrir ces coûts, nous sommes également là pour vous accompagner dans le choix d'une assurance emprunteur adaptée à votre situation</p>
              <p class="card-text"><small class="text-body-secondary" >Faire Simulation</small></p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 card-bleu">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../assets/pretRenou.png" class="img-fluid rounded-start" alt="Img credit étudiant" style="margin-top: 5rem;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Crédit Renouvelable</h5>
              <p class="card-text">Donnez-vous une flexibilité financière supplémentaire. Nous allons au-delà de la simple aide au financement, en vous accompagnant dans vos démarches pour obtenir un crédit renouvelable qui correspond à vos besoins</p>
              <p class="card-text"><small class="text-body-secondary">Faire Simulation </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 25px;
  row-gap: 30px;
  margin-bottom: 5%;
}
.card-bleu{
  max-width: 540px;
  outline:2px solid black;
  border: 7px solid #487070;
  justify-content: center;
}
.card-jaune{
  max-width: 540px;
  outline:2px solid black;
  border: 7px solid #E2B33C;
  justify-content: center;

}
.immo:hover{
  background-color: #487070;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #588B8B;
}
h1{
  float: left;
  font-size: 300%;
}
#imgLogo{
  width: 200px;
  height: 200px;
  margin-top: 8%;
}
</style>
