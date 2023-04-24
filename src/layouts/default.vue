<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const photoStore = usePhotoStore()

await photoStore.loadPhotos()
</script>
