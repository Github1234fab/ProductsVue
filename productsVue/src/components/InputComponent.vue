<template>
  <div>
    <div class="input_container">
      <input
        v-model="searchTerm"
        @input="updateSearchTerm"
        type="search"
        name="search-product"
        placeHolder="Recherchez des marques"
        class="search_input"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    updateSearchTerm() {
      this.$store.commit('setSearchTerm', this.searchTerm)
    }
  },
  computed: {
    searchItems() {
      return this.$store.state.searchItems
    }
  }
}
</script>

<style>
</style>
