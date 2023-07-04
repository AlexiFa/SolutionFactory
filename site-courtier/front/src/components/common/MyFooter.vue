<template>

<footer class="text-center text-lg-start bg-light text-muted" style="border-top: 1px solid #f4f4f6; outline: 0.5px solid #2a2d34;">

   <section id="section" class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

  
    <div id="card" class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-6 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i ></i>OPTI-GESTION
          </h6>
          <p id="text">
            Optigestion est votre partenaire incontournable pour une gestion efficace de vos dossiers de courtage. Notre plateforme conviviale et intuitive est conçue spécialement pour répondre à vos besoins professionnels. Grâce à Optigestion, vous pouvez optimiser votre travail quotidien et mieux gérer vos clients, vos contrats et vos documents.
          </p>
        </div>

        <div id="contact" class="col-md-3 col-lg-4 col-xl-2 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i ></i>Contact</h6>
          <p id="adresse"><i ></i> 8 rue des coquelicots<br> 95008 Paris, France</p>
          <p>
            <i ></i>
            optigestion@gmail.com
          </p>
          <p><i ></i> + 33 07 56 45 97 88 </p>
        </div>

      </div>

    </div>
  </section>
  
  <div class="text-center p-4" style="background-color: #f4f4f6;">
    © 2023 OPTI-GESTION
  </div>

</footer>

</template>


<script>

export default {
    name: 'MyFooter'
}

</script>

<style scoped>

#section {
  background-color: #588B8B; 
  margin-top: 0%; 
}

#text {
  text-align: justify;
}

#contact {
  margin-top: 0%;
}

#adresse{
  margin-top: -5%;
}

#card{
  border-radius: 0%;
  border: 3px solid #E9C46A;
}

</style>