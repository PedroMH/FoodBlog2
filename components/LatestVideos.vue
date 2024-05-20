<template>
    <section>
        <ContentList path="/videos" v-slot="{ list }">
        <div v-for="video in list" :key="video._path" class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="carousel-item"> {{ video.title }}</div>    
        </div>
    </ContentList>
    </section>

</template>