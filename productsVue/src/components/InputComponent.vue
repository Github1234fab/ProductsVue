<template>
  <div>
    <div class="input_container">
      <input
        v-model="searchItems"
        @input="filteredProducts"
        @keydown.enter="searchProducts"
        type="text"
        name="search-product"
        placeHolder="Recherchez par marques"
        class="search_input"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchItems: "",
    };
  },
  methods: {
    filteredProducts() {
      this.$emit("filteredProducts", this.searchItems);
    },
  },
};
</script>

<style></style>
