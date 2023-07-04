<template>
  <div style = "position: relative; z-index: -1; height: 100%;">
      <div class="background-circle1"></div>
      <div class="background-circle2"></div>
      <div class="container about">
        <div class="title">
          <h1>Qu'est-ce qu'OptiGestion?</h1>
        </div>
        <div class="section">
          <div class="text">
            <h2>Une aide pour vous, les particuliers</h2>
            <p>[]</p>
          </div>
          <div class="image"><img src="../assets/courtier-immo-check.png" alt=""></div>
        </div>
        <div class="section">
          <div class="image"><img src="" alt=""></div>
          <div class="text">
            <h2>Votre Courtier ne sera plus deborde !</h2>
            <p>[]</p>
          </div>
        </div>
        <div class="last-section">
          <div class="text">
            <h2>L'équipe de TechExpert Solutions au rapport</h2>
          </div>
          <div class="team">
            <div class="member">
              <img src="" alt="">
            </div>
            <div class="member">
              <img src="" alt="">
            </div>
            <div class="member">
              <img src="" alt="">
            </div>
            <div class="member">
              <img src="" alt="">
            </div>
            <div class="member">
              <img src="" alt="">
            </div>
            <div class="member">
              <img src="" alt="">
            </div>            
          </div>
        </div>        
      </div>
    </div>
</template>
<style scoped >
.background-circle1 {
  position: absolute;
  z-index: 1;
  top: -300px;
  right:-350px;
  height: 800px;
  width:1100px;
  background-color: #588b8b;
  border-radius:1100px;
  border: 1px solid black;
}
.background-circle2{
  position: absolute;
  z-index: 1;
  bottom: -300px;
  left: -350px;
  height: 800px;
  width:1100px;
  background-color: #e9c46a;
  border-radius: 1100px;
  border: 1px solid black;
}
.about{
  position: relative;
  z-index:2;
  border:solid;
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.title{
  font-size: 200%;
  margin-bottom: 5%;
}
.section{
  display: flex;
  flex-direction: row;
}
.lastsection{
  display:flex;
  flex-direction: column;
}
</style>