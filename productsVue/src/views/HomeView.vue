<template>
  <div class="main">
    <section>
      <div class="bannerA">
        <h2>OUTLET</h2>
        <h3>-20% EN PLUS SUR DES LOOKS CHICS !</h3>
        <h4>Tenues d'invités très stylées</h4>
        <h5>Code: <button>GLAM</button></h5>
      </div>
    </section>
    <section>
      <div class="bannerB">
        <h2 class="">TOPMAN</h2>
        <h3>PRINTEMPS/ÉTÉ</h3>
        BU
        <img
          class="bannerB_picture"
          src="https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>
    </section>
    <section>
      <div class="bannerC">
        <div class="container_bannerC_A">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/wk30-moment/no-border/mw_uk_collusion_moment_870x1110.jpg"
            alt=""
          />
          <h3 class="bannerC_title">Collusion</h3>
          <h4 class="bannerC_description">Sélection nouvelle saison</h4>
        </div>

        <div class="container_bannerC_B">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_balance_moment_870x1110.jpg"
            alt=""
          />
          <h3 class="bannerC_title">New Balance</h3>
          <h4 class="bannerC_description">L'actu Baskets</h4>
        </div>

        <div class="container_bannerC_C">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_in_asos_design_moment_870x1110.jpg"
            alt=""
          />
          <h3 class="bannerC_title">Nouveautés ASOS Design</h3>
          <h4 class="bannerC_description">street style en force</h4>
        </div>

        <div class="container_bannerC_D">
          <img
            class="bannerC_picture"
            src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_licence_moment_870x1110.jpg"
            alt=""
          />
          <h3 class="bannerC_title">T-shirts Rétro</h3>
          <h4 class="bannerC_description">Throw Baks de motifs!</h4>
        </div>
      </div>
    </section>
    <section>
      <div class="bannerD">
        <h2 class="bannerD_title">JUSQU'À MOINS 50% SUR LES STARS DU STYLE!</h2>
        <h4 class="bannerD_description">
          Pour une durée limitée sur une sélection d'articles. Prix déjà démarqués sur le site.
        </h4>
      </div>
    </section>
  </div>
</template>

<script></script>

<style>
.main {
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
}
.container_outlet {
  height: 300px;
  width: 100%;
  background-color: green;
}
.container_image {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  object-fit: contain;
  background-color: blue;
}
.image {
  width: 400px;
  height: 400px;
}
</style>
