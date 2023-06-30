<template>
    <div style="display: flex;flex-direction:column; align-items: center; justify-content:space-evenly; border:2px solid black;border-radius: 20px;">
      <h4 style="">Stade d'avancement:</h4>
      <div class="progress" style="width: 90%;">
        <div class="progress-bar progress-bar-consulted" role="progressbar" style="width: 33%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Consulté</div>
        <div class="progress-bar progress-bar-send" role="progressbar" style="width: 34%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Envoyé</div>
        <div class="progress-bar progress-bar-done" role="progressbar" style="width: 33s%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Terminé</div>
      </div>
    </div>
  
  </template>

  
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
  