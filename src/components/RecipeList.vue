<template>
  <div class="row q-gutter-md">
    <q-card v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
      <q-img :src="recipeImageURL(recipe)" :ratio="1">

      </q-img>

      <q-card-section class="q-mb-xl">
        <q-btn v-if="recipeURL(recipe)" :href="recipeURL(recipe)" target="_blank" round color="accent" icon="open_in_new" class="link-button" />
        <div class="text-h6">{{ recipeName(recipe) || 'unknown title' }}</div>
        <div class="text-subtitle2 text-weight-regular">{{ recipeSourceName(recipe) || 'unknown source' }}</div>
      </q-card-section>

      <q-card-actions class="recipe-actions">
        <q-btn flat round color="accent" icon="zoom_out_map" @click="showRecipeDetails(recipe)" />
        <q-btn flat round color="accent" icon="file_download" disable />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="detailsOpen">
      <q-card v-if="detailsRecipe" class="recipe-details-card">
        <recipe-details v-model="detailsRecipe" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import RecipeDetails from 'components/RecipeDetails.vue'

import { computed, ref } from 'vue'

import { recipeImageURL, recipeName, recipeIsInCollection, recipeSourceName, recipeURL } from 'src/helpers/recipes'

import { useCollections } from 'stores/collections'
const collections = useCollections()

const detailsOpen = ref(false)
const detailsRecipe = ref(null)

function showRecipeDetails(recipe) {
  detailsRecipe.value = recipe
  detailsOpen.value = true
}

const filteredRecipes = computed(() => {
  if (!collections.activeCollectionID) return collections.recipes
  return collections.recipes.filter((recipe) => recipeIsInCollection(recipe, collections.activeCollectionID))
})

</script>

<style lang="scss" scoped>
.recipe-card {
  width: 100%;
  max-width: 225px;
  .link-button {
    position: absolute;
    top: -38px;
    right: 3px;
  }
  .recipe-actions {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.recipe-details-card {
  width: 90vw;
  max-width: 1000px;
  padding: 30px;
}
</style>
