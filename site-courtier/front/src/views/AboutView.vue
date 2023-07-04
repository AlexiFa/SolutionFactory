<template>
  <div style = "position: relative; z-index: -1; height: 100%;">
      <div class="background-circle1"></div>
      <div class="background-circle2"></div>
      <div class="container about">
        <div class="title">
          <h1>Qu'est-ce que OptiGestion?</h1>
        </div>
        <div class="section">
          <div class="text">
            <h2>Une aide pour vous, les particuliers</h2>
            <p>[details]</p>
          </div>
          <div class="image"><img src="../assets/courtier-immo-check.png"></div>
        </div>
        <div class="section">
          <div class="image"><img src="../assets/expert-pas-deborde.png"></div>
          <div class="text">
            <h2>Votre Courtier ne sera plus deborde !</h2>
            <p>[details]</p>
          </div>
        </div>
        <div class="last-section">
          <div class="tt">
            <h2>L'équipe de TechExpert Solutions au rapport</h2>
          </div>
          <div class="team">
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>
            <div class="member">
              <div class="circle">membre</div>
              <h3>Prenom Nom</h3>
              <p>Position</p>
            </div>            
          </div>
        </div>        
      </div>
    </div>
</template>
<style scoped >
.about{
  position: relative;
  z-index:2;
  display: flex;
  flex-direction: column;
  padding: 5% 0%;
  /* background-color: rgba(255,255,255,0.25); */
  /* border-left: 1px solid; */
  /* border-right: 1px solid; */
}
.title{
  display:flex;
  justify-content:left;
  margin-bottom: 5%;
  border:solid;
} .title h1 {font-size: 290%;}
.section{
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  justify-content: space-between;
  border: solid;
}
.text{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 50%;
}
.image{
  width:50%;
}.image img { height: 400px;}
.last-section {
  display:flex;
  flex-direction: column;
  margin-bottom: 5%;
  border :solid;
} .last-section .tt { margin-bottom: 2%;}
.team{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  
}.member{
  justify-self: center;
}
.circle {
  height: 200px;
  width:200px;
  border-radius: 100%;
  background: #588b8b;
}
.background-circle1 {
  position: absolute;
  z-index: 1;
  top: -300px;
  right:-350px;
  height: 800px;
  width:1100px;
  background-color: #588b8b;
  border-radius:1100px;
  border: 0.5px solid black;
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
  border: 0.5px solid black;
}
</style>