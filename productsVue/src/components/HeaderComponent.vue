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
    <InputComponent :products="products" @filteredProducts="handleFilteredProducts" />
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

<script>
import axios from "axios";
import InputComponent from "../components/InputComponent.vue";

export default {
  components: {
    InputComponent,
  },
  data() {
    return {
      products: [],
      searchItems: "",
      filteredProducts: [], // nouvelle propriété ajoutée
    };
  },
   methods: {
    handleFilteredProducts(searchTerm) {
       this.searchItems = searchTerm;
       console.log(this.searchItems);
      this.filteredProducts = this.products.filter((product) => {
        return product.brandName.toLowerCase().includes(this.searchItems.toLowerCase());
      });
        console.log(this.filteredProducts);
     },

  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "091a7623a2mshfe940e4a900ef7bp1a0aa8jsn21d9e18b7442",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.products = response.data.products;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

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
  margin-left: 25px;
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
  width: 650px;
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
