<template>
  <div class="main">
    <section>
      <div class="bannerA">
        <h2 class="bannerA_title">OUTLET</h2>
        <h3 class="bannerA_title2">
          -20% EN PLUS SUR <br />
          DES LOOKS CHICS !
        </h3>
        <h4 class="bannerA_description">Tenues d'invités très stylées</h4>
        <h5 class="bannerA_description2">Code: <button class="bannerA_button">GLAM</button></h5>
      </div>
    </section>
    <section>
      <div class="bannerB">
        <div class="bannerB_container_title">
          <h2 class="bannerB_title">TOPMAN</h2>
          <h3 class="bannerB_description">PRINTEMPS/ÉTÉ</h3>
        </div>
        <img
          class="bannerB_picture"
          src="https://images.asos-media.com/products/asos-design-veste-de-costume-slim-vert-foret/203921024-1-forestgreen?$n_640w$&wid=513&fit=constrain"
          alt=""
        />
        <img
          class="bannerB_picture2"
          src="https://images.asos-media.com/groups/asos-design-costume-ajuste-a-carreaux-vichy-bordeaux/144287-group-1?$n_640w$&wid=513&fit=constrain"
          alt=""
        />
      </div>
    </section>
    <section>
      <div class="bannerC">
        <div class="bannerC_container">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/wk30-moment/no-border/mw_uk_collusion_moment_870x1110.jpg"
            alt=""
          />
          <div class="bannerC_container_title">
            <h3 class="bannerC_title">Collusion</h3>
            <h4 class="bannerC_description">Sélection nouvelle saison</h4>
          </div>
        </div>

        <div class="bannerC_container">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_balance_moment_870x1110.jpg"
            alt=""
          />
          <div class="bannerC_container_title">
            <h3 class="bannerC_title">New Balance</h3>
            <h4 class="bannerC_description">L'actu Baskets</h4>
          </div>
        </div>

        <div class="bannerC_container">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_in_asos_design_moment_870x1110.jpg"
            alt=""
          />
          <div class="bannerC_container_title">
            <h3 class="bannerC_title">Nouveautés ASOS Design</h3>
            <h4 class="bannerC_description">street style en force</h4>
          </div>
        </div>

        <div class="bannerC_container">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_licence_moment_870x1110.jpg"
            alt=""
          />
          <div class="bannerC_container_title">
            <h3 class="bannerC_title">T-shirts Rétro</h3>
            <h4 class="bannerC_description">Throw Baks de motifs!</h4>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bannerD">
        <h2 class="bannerD_title">
          JUSQU'À MOINS 50% SUR <br />
          LES STARS DU STYLE!
        </h2>
        <h4 class="bannerD_description">
          Pour une durée limitée sur une sélection d'articles. Prix déjà démarqués sur le site.
        </h4>
      </div>
    </section>

    <section>
      <div class="bannerE">
        <div class="containerA_bannerE">
          <img
            src="https://images.asos-media.com/products/asos-design-coupe-vent-beige/204422881-1-beige?$n_640w$&wid=513&fit=constrain"
            alt=""
          />
          <h2 class="bannerE_title">ASOS DESIGN FT.KARL KANI</h2>
          <h4 class="bannerE_description">Le remix 90s</h4>
          <button class="bannerE">SHOPPER</button>
        </div>

        <div class="containerB_bannerE">
          <img
            src="https://images.asos-media.com/products/asos-design-lunettes-de-soleil-de-course-enveloppantes-avec-verres-effet-miroir-bleu/204230473-1-midblue?$n_640w$&wid=513&fit=constrain"
            alt=""
          />
          <h2 class="bannerE_title">COLLECTION CASUAL</h2>
          <h4 class="bannerE_description">Pour passer du lit au canapé</h4>
          <button class="bannerE">SHOPPER</button>
        </div>
      </div>
    </section>

    <section>
      <div class="bannerF">
        <h2 class="bannerF_title">ASOS Premium |<span>logo</span> Spotify Premium</h2>
        <h3 class="bannerF_description">
          Profite de Spotify Premium GRATUITEMENT pendant 3 mois + Livraison 24H pendant une année
          entière avec ASOS Premium !
        </h3>
      </div>
    </section>

    <section>
      <div class="bannerG">
        <h2>CLEARPAY <span>logo</span></h2>
        <h3>Je l'aime. Je l'achète. Je le paie en 3 fois avec Clearpay</h3>
      </div>
    </section>

    <section>
      <div class="bannerH">
        <h2 class="bannerH title">MARQUES À SUIVRE</h2>
        <div class="bannerH_containerLogos"></div>
      </div>
    </section>

    <section>
      <div class="bannerI">
        <div class="bannerI_logos"></div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* // BANNERA */
.bannerA {
  background-color: #9cf0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 390px;
  justify-content: space-around;
  margin-top: 20px;
}
.bannerA_title {
  font-family: Oswald;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 5px;
}
.bannerA_title2 {
  font-family: impact;
  font-weight: 1000;
  font-size: 48px;
  letter-spacing: 3px;
}
.bannerA_description {
  font-family: Oswald;
  font-weight: 700;
  font-size: 28px;
}
.bannerA_description2 {
  font-family: Oswald;
  font-size: 26px;
}
.bannerA_button {
  background-color: transparent;
}

/* //BANNERB */
.bannerB {
  height: 654px;
  background-color: rgb(137, 44, 44);
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 50px 20px 50px;
}
.bannerB_picture {
  object-fit: cover;
  position: absolute;
  left: 100px;
}
.bannerB_picture2 {
  object-fit: cover;
  position: absolute;
  right: 100px;
}
.bannerB_title {
  position: absolute;
  top: 250px;
  right: 250px;
  color: white;
  z-index: 9999;
  font-size: 178px;
  height: 300px;
  background-color: black;
  opacity: 0.7;
}
.bannerB_description {
  position: absolute;
  top: 450px;
  right: 300px;
  z-index: 9999;
  font-size: 78px;
  height: 100px;
  background-color: white;
}

/* //BANNERC */
.bannerC {
  display: flex;
  /* align-items: center; */
  align-content: center;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  height: 540px;
  margin: 0px 50px 20px 50px;
}
.bannerC_container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 272px;
}
.bannerC_picture {
  object-fit: cover;
}
.bannerC_container_title {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.bannerC_title {
  font-size: 22px;
  font-weight: 700;
  font-family: Oswald;
}
.bannerC_description {
  font-size: 18px;
  font-family: Oswald;
}

/* //BANNERD */
.bannerD {
  background-color: #9447ff;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bannerD_title {
  font-size: 52px;
  color: white;
  font-family: impact;
  font-weight: 900;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 3px;
}
.bannerD_description {
  font-size: 14px;
  color: white;
  font-family: poppins;
  font-weight: 200;
}
</style>
