<template>
  <footer>
    <div class="footer_container">
      <div class="containerA">
        <h1 class="containerA_title">Aide & information</h1>
        <a href="https://www.example.com">Assitance</a>
        <a href="https://www.example.com">Suivi commande</a>
        <a href="https://www.example.com">Livraison & retours</a>
        <a href="https://www.example.com">ASOS Premier</a>
        <a href="https://www.example.com">-10% pour les étudiants</a>
        <a href="https://www.example.com">Plan du site</a>
      </div>

      <div class="containerB">
        <h1 class="containerB_title">À propos d'ASOS</h1>
        <a href="">À propos d'ASOS</a>
        <a href="">ASOS recrute</a>
        <a href="">Responsabilité des entreprises</a>
        <a href="">Investisseurs</a>
      </div>
      <div class="containerC">
        <h1 class="containerC_title">Encore plus d'Asos</h1>
        <a href="">Mobilité et applis d'ASOS</a>
        <a href="">ASOS MarketPlace</a>
        <a href="">Chèques cadeaux</a>
        <a href="">French Days</a>
        <a href="">Soldes</a>
        <a href="">Black Friday</a>
        <a href="">Parrainer-un-ami</a>
        <a href="">Ìnformations pour les partenaires</a>
      </div>
      <div class="containerD">
        <h1 class="containerD_title">Sélectionnez le pays</h1>
        <a href="">Vous êtes en France | Changer</a>
      </div>
    </div>
  </footer>
</template>

<script>
// export default {}
</script>

<style>
footer {
  height: 450px;
  background-color: #eee;
  display: flex;
  justify-content: center;
}

.footer_container {
  width: 80%;
  display: flex;
  justify-content: space-around;
  height: 300px;
}
.containerA,
.containerB,
.containerC,
.containerD {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
}

.containerA a, 
.containerB a,
.containerC a,
.containerD a {
  color: grey;
  font-size: 11px;
  margin-left: 0px;
  font-weight: 300;
}
.containerA_title,
.containerB_title,
.containerC_title,
.containerD_title {
  text-transform: uppercase;
  color: rgb(75, 72, 72);
  margin-bottom: 10px;
}

</style>
