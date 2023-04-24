
export default defineNuxtRouteMiddleware(async (to, from) => {
  const photoStore = usePhotoStore()

  await photoStore.loadPhotos()
})
