<template>
  <div class="main">
    <section>
      <div class="container_outlet">
        <h2>OUTLET</h2>
        <h3>-20% EN PLUS SUR DES LOOKS CHICS !</h3>
        <h4>Tenues d'invités très stylées</h4>
        <h5>Code: <button>GLAM</button></h5>
      </div>
    </section>
    <section>
      <div class="container_image">
        <h2 class="">TOPMAN</h2>
        <h3>PRINTEMPS/ÉTÉ</h3>
        BU
        <img
          class="image"
          src="https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
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
