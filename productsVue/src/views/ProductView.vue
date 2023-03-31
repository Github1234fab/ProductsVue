<template>
  <div class="wrapper">
    <div class="content">
      <div class="product-list">
        <CardComponent
          v-for="(product, index) in filteredProducts"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardComponent from '../components/CardComponent.vue'
export default {
  name: 'ProductView',
  components: {
    CardComponent
  },
  data() {
    return {
      products: [],
      searchItems: this.$route.query.brand || ''
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.brandName.toLowerCase().includes(this.searchItems.toLowerCase())
      })
    }
  },
  mounted() {
    const options = {
      // votre code axios
    }

    axios
      .request(options)
      .then((response) => {
        this.products = response.data.products
        console.log(this.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>


<style>
.product-list {
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
}
h1 {
  font-size: 16px;
}
</style>
