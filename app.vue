<template>
  <AppHeader/>
  <NuxtLayout>
      <NuxtPage />
      <ContentList v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2 class="bg-red-500">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
      <ContentDoc v-slot="{ doc }">
        <h1 class="bg-green-700">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
  </NuxtLayout>
  <AppFooter/>
</template>

<script setup>

</script>