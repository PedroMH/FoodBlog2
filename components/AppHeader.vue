<template>
<header >
    <div class="card">
        <Menubar :model="items" />
    </div>
    <NuxtImg src="/public/logo.jpg" />

    <div class="card">
        <Menubar :model="itemsRight" />
    </div>
</header>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
      label: 'Recipes',
      icon: 'pi pi-home'
  },
  {
      label: 'Articles',
      icon: 'pi pi-star'
  },
  {
      label: 'Videos',
      icon: 'pi pi-search',
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope'
  }
]);
const itemsRight = ref([
  {
      label: 'App',
      icon: 'pi pi-home'
  },
  {
      label: 'Shop',
      icon: 'pi pi-star'
  },
  {
      label: 'About',
      icon: 'pi pi-search',
  }
]);
</script>