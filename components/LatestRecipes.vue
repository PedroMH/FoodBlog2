<template>
    <section>
    <ContentList path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="carousel-item"> {{ article.title }}</div>    
      </div>
    </ContentList>
</section>
</template>