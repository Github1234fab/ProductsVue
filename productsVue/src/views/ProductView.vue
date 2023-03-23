<template>
  <div class="wrapper">
    <div class="content">
      <div class="product-list">
        <CardComponent v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { stringifyExpression } from '@vue/compiler-core'
import axios from 'axios'
import CardComponent from '../components/CardComponent.vue'
export default {
  name: 'ProductView',
  components: {
    CardComponent,
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    const options = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/products/v2/list',
      params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US',
      },
      headers: {
        'X-RapidAPI-Key': '091a7623a2mshfe940e4a900ef7bp1a0aa8jsn21d9e18b7442',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
      },
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
  },
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
