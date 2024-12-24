import { defineStore, acceptHMRUpdate } from 'pinia'
import { shallowRef } from 'vue';

import { recipeCollections, recipeID } from 'src/helpers/recipes'

export const useCollections = defineStore('collections', {
  state: () => ({
    loaded: false,
    activeCollectionID: null,
    recipes: shallowRef([]), // Map ID to recipe details
    collections: {},  // Map ID to recipe count
  }),

  getters: {},

  actions: {
    setActiveCollection(collectionID) {
      this.activeCollectionID = collectionID
    },

    loadData(data) {
      // TODO: Do some basic validations

      // Use local vars so we can assign to the state all at once and prevent a reactivity mess and big slowdowns
      const collections = {}
      const recipes = {}
      data.feed.forEach(recipe => {
        const id = recipeID(recipe)
        if (!id) {
          console.error('Could not determine ID for recipe:')
          console.error(recipe)
          return
        }
        recipe.id = id
        if (recipes[id]) {
          console.warn(`Duplicate entries found for recipe ${id}`)
        }
        recipes[id] = recipe // TODO: Account for duplicates (don't update the count)
        const collectionsList = recipeCollections(recipe)
        if (collectionsList) {
          collectionsList.forEach(c => {
            if (!collections[c]) collections[c] = 0
            collections[c] += 1
          })
        }
      })
      this.collections = collections
      this.recipes = Object.values(recipes)
      this.loaded = true
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCollections, import.meta.hot))
}
