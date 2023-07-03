<template>
    <div style="display: flex;flex-direction:column; align-items: flex-start; justify-content:space-between; height:100%;">
      <h3 style="margin-top: 10%;">Stade d'avancement:</h3>
      <div class="progress" style="width: 100%; margin-bottom: 10%;">
        <div class="progress-bar progress-bar-consulted" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Consulté</div>
        <div class="progress-bar progress-bar-send" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Envoyé</div>
        <div class="progress-bar progress-bar-done" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75">Terminé</div>
      </div>
    </div>
  
  </template>

  
  <style scoped>
  
  
  .progress-bar-consulted{
  background-color: #E9C46A;
  height: 100%;
  width: 33%;
  text-align: center;
  }
  .progress-bar-send{
  background-color: #E76F51;
  height: 100%;
  width: 34%;
  text-align: center;
  }
  
  .progress-bar-done{
  background-color: #2A9D8F;
  height: 100%;
  width: 33%;
  text-align: center;
  }
  </style>
  