<template>
  <header>
    <!-- <div class="logo"><i class="fa-solid fa-store fa-2xl"></i></div> -->
    <h1 class="title_appli">Boots, Sneakers & Shoes</h1>
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
      <i class="fa-regular fa-user"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
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
  height: 80px;
  width: 100%;
  background: radial-gradient(
    343px at 46.3% 47.5%,
    rgb(242, 242, 242) 0%,
    rgb(241, 241, 241) 72.9%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* align-content: center; */
}
nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 16px;
  margin-right: 50px;
  background-color: #c0c0c0;
  height: 50px;
}
a {
  font-family: Poppins;
  text-decoration: none;
  color: white;
  margin: auto;
}
/* .logo {
  margin-left: 50px;
  color: grey;
} */
.title_appli {
  margin-left: 50px;
  text-transform: uppercase;
  font-family: neucha;
  font-size: 28px;
  font-weight: 900;
  color: grey;
  margin-top: 15px;
}
.search_input {
  width: 350px;
  border: none;
  box-shadow: 1px 1px 3px 1px inset lightGrey;
  padding: 10px;
  font-family: poppins;
  color: grey;
  border-radius: 20px;
  font-size: 14px;
}

.icons {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  width: 100px;
  height: 50px;
  margin-right: 50px;
}
.buttons {
}
.button_femme,
.button_homme {
  height: 80px;
  border: none;
  background-color: #c0c0c0;
  width: 100px;
  font-family: Poppins;
  color: white;
  font-size: 18px;
  border: 1px white solid;
}
</style>
