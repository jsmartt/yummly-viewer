<template>
  <div class="row q-gutter-md">
    <q-card v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
      <q-img :src="recipeImageURL(recipe)" :ratio="1">

      </q-img>

      <q-card-section>
        <!-- <q-btn round color="primary" icon="zoom_out_map" class="expand-button" /> -->
        <q-btn v-if="recipeURL(recipe)" :href="recipeURL(recipe)" target="_blank" round color="accent" icon="open_in_new" class="link-button" />
        <div class="text-h6">{{ recipeName(recipe) || 'unknown title' }}</div>
        <div class="text-subtitle2 text-weight-regular">{{ recipeSourceName(recipe) || 'unknown source' }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

import { computed } from 'vue'

import { recipeImageURL, recipeName, recipeIsInCollection, recipeSourceName, recipeURL } from 'src/helpers/recipes'

import { useCollections } from 'stores/collections'
const collections = useCollections()

const filteredRecipes = computed(() => {
  if (!collections.activeCollectionID) return collections.recipes
  return collections.recipes.filter((recipe) => recipeIsInCollection(recipe, collections.activeCollectionID))
})

</script>

<style lang="scss" scoped>
.recipe-card {
  width: 100%;
  max-width: 225px;
  .expand-button {
    position: absolute;
    top: -38px;
    left: 3px;
  }
  .link-button {
    position: absolute;
    top: -38px;
    right: 3px;
  }
}
</style>
