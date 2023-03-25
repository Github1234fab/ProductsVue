<template>
  <div class="container_A">
    <button class="containerA_button">Market place</button>
    <button class="containerA_button">Aide et faq</button>

    <!-- </div> -->
  </div>
  <header>
    <!-- <div class="logo"><i class="fa-solid fa-store fa-2xl"></i></div> -->
    <h1 class="title_appli">Batos</h1>
    <div class="buttons">
      <button class="button_femme">Femme</button>
      <button class="button_homme">Homme</button>
    </div>
    <div class="input_container">
      <input
        v-model="searchKey"
        type="search"
        name="search-product"
        placeHolder="Recherchez des articles et des marques"
        class="search_input"
        autocomplete="off"
      />
    </div>
    <div class="icons">
      <i class="fa-regular fa-user fa-lg"></i>
      <i class="fa-solid fa-heart fa-lg"></i>
      <i class="fa-solid fa-bag-shopping fa-lg"></i>
    </div>
  </header>
  <nav>
    <a href="/">Home</a>
    <a href="/A_propos">About</a>
    <a href="/products">Products</a>
    <a href="/Card">Card</a>
    <a href="">Promos</a>
    <a href="">Nouveautés</a>
    <a href="">Protoypes</a>
  </nav>
</template>

<script></script>

<style>
header {
  height: 60px;
  width: 100%;
  background-color: rgb(46, 44, 44);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 14px;
  margin-right: 50px;
  background-color: #4d4747;
  height: 50px;
}
a {
  font-family: futura;
  text-decoration: none;
  color: white;
  margin: auto;
  letter-spacing: 2px;
}
/* .logo {
  margin-left: 50px;
  color: grey;
} */
.title_appli {
  margin-left: 15px;
  text-transform: lowercase;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin-top: 10px;
  letter-spacing: -2px;
  text-align: center;
}
.search_input {
  width: 750px;
  border: none;
  box-shadow: 1px 1px 3px 1px inset lightGrey;
  padding: 5px;
  font-family: poppins;
  color: grey;
  border-radius: 20px;
  font-size: 14px;
}
::placeholder {
  padding: 20px;
  font-family: futura;
}

.icons {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  width: 150px;
  height: 50px;
  margin-right: 50px;
  color: white;
}

.button_femme,
.button_homme {
  height: 60px;
  border: none;
  background-color: #4d4747;
  width: 80px;
  font-family: futura;
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.container_A {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.containerA_button {
  width: 100px;
  border: 1px lightgray solid;
  font-family: oswald;
  font-size: 12px;
  letter-spacing: 1px;
  color: grey;
  background-color: transparent;
  height: 25px;
  border-top: none;
  border-bottom: none;
}
</style>
