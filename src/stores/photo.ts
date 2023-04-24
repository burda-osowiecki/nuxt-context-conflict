
export const usePhotoStore = defineStore('photo', {
  state: (): { loadedPhotos: any[] } => ({
    loadedPhotos: [],
  }),

  getters: {},

  actions: {
    async loadPhotos(): Promise<void> {
      const photos = await useApiFetch('/photos')

      this.loadedPhotos.push(photos)
    },
  },
})
