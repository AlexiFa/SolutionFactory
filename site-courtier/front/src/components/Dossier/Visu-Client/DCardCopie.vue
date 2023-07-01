<template>
  
    <div style="border: 1px solid black; display: grid; background-color:#E9C46A;">
  
      <h3>Stade d'avancement: </h3>
      <div class="progress" style="width: 50%; margin-left: auto; margin-right: auto;">
        <div class="progress-bar progress-bar-consulted" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress1 + '%' }">Consulté</div>
        <div class="progress-bar progress-bar-send" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress2 + '%' }">Envoyé</div>
        <div class="progress-bar progress-bar-done" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress3 + '%' }">Terminé</div>
      </div>
  
      <div style="padding-top: 2%" >
          <button type="button" class="btn btn-dark btn-sm" @click="Consulted">Consulté</button>
          <button type="button" class="btn btn-dark btn-sm" @click="Send">Envoyé</button>
          <button type="button" class="btn btn-dark btn-sm" @click="Done">Terminé</button>
      </div>
  
      <div class="mb-3" style="padding-top: 5%; width: 30%; display: block; margin-left: auto; margin-right: auto;">
        
        <textarea class="form-control"  rows="10" placeholder="Chat" style="border: 4px solid #2A2D34;"></textarea>
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
  
  </style>
  