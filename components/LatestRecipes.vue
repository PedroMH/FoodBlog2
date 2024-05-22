<template>
  <section>
    <ContentList path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path"
        class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="card w-96 bg-base-100 shadow-xl carousel-item">
          <div class="card-body">
            <h2 class="card-title">{{ article.title }}</h2>
          </div>
          <figure><NuxtImg :src="article.image" alt="image" />
          </figure>
        </div>
      </div>

    </ContentList>
  </section>
</template>