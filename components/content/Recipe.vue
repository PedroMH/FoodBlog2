<!-- components/content/Card.vue -->
<template>
    <div class="p-2 border bg-white dark:bg-green-400 dark:border-gray-700 rounded">
      recipe lol
      <ContentSlot :use="$slots.header" unwrap="p"></ContentSlot>
    </div>
</template>
  