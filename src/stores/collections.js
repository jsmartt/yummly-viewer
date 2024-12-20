import { defineStore, acceptHMRUpdate } from 'pinia'
import { shallowRef } from 'vue';

export const useCollections = defineStore('collections', {
  state: () => ({
    loaded: false,
    activeCollectionID: null,
    recipes: shallowRef({}), // Map ID to recipe details
    collections: {},  // Map ID to recipe count
  }),

  getters: {},

  actions: {
    setActiveCollection(collectionID) {
      this.activeCollectionID = collectionID
    },

    loadData(data) {
      // TODO: Do some basic validations
      data.feed.forEach(recipe => { // TODO: Remove slice
        this.parseRecipe(recipe)
      })
      this.loaded = true
    },

    parseRecipe(recipe) {
      console.log(`Parsing recipe:`)
      const id = recipe['tracking-id'] || recipe['urb-url-id']
      if (!id) {
        console.error('Could not determine ID for recipe:')
        console.error(recipe)
        return
      }
      this.recipes[id] = recipe
      if (recipe.display && recipe.display.collections) {
        recipe.display.collections.forEach(c => {
          if (!this.collections[c]) this.collections[c] = 0
          this.collections[c] += 1
        })
      }
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCollections, import.meta.hot))
}
