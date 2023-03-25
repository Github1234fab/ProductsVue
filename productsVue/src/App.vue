<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from "../src/components/HeaderComponent.vue"
import FooterComponent from "../src/components/FooterComponent.vue"
</script>

<template>
  <HeaderComponent/>
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
  <RouterView />
  <FooterComponent/>
</template>

<style>
</style>
