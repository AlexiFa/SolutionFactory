
<template>
  
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
      <button type="button" class="btn btn-outline-dark">Envoyer</button>
      
    </div>

  </div>

  

</template>

<script>
export default {
  data() {
    return {
      progress1: 0,
      progress2: 0,
      progress3: 0,
    };
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
  },
};
</script>

<style scoped>


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



</style>
