<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from "../src/components/HeaderComponent.vue"
</script>

<template>
  <HeaderComponent/>
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
  <RouterView />
</template>

<style>
</style>
