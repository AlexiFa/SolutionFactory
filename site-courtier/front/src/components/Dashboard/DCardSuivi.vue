<template>
    <div style="display: flex;flex-direction:column; justify-content:space-evenly; border:2px solid black;border-radius: 20px;">
      <h4 style="">Stade d'avancement:</h4>
      <div class="progress" style="">
        <div class="progress-bar progress-bar-consulted" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress1 + '%' }">Consulté</div>
        <div class="progress-bar progress-bar-send" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress2 + '%' }">Envoyé</div>
        <div class="progress-bar progress-bar-done" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" :style="{ width: progress3 + '%' }">Terminé</div>
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
  width: 35%;
  text-align: center;
  }
  .progress-bar-send{
  background-color: #E76F51;
  height: 100%;
  width: 35%;
  text-align: center;
  }
  
  .progress-bar-done{
  background-color: #2A9D8F;
  height: 100%;
  width: 30%;
  text-align: center;
  }
  </style>
  