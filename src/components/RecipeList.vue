<template>
  <div class="row q-gutter-md">
    <q-card v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card" @click="showRecipeDetails(recipe)">
      <q-img :src="recipeImageURL(recipe)" :ratio="1">

      </q-img>

      <q-card-section>
        <q-btn v-if="recipeURL(recipe)" :href="recipeURL(recipe)" target="_blank" round color="accent" icon="open_in_new" class="link-button" @click.stop="" />
        <div class="text-h6">{{ recipeName(recipe) || 'unknown title' }}</div>
        <div class="text-subtitle2 text-weight-regular">{{ recipeSourceName(recipe) || 'unknown source' }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { recipeImageURL, recipeName, recipeIsInCollection, recipeSourceName, recipeURL } from 'src/helpers/recipes'

import { useCollections } from 'stores/collections'
const collections = useCollections()

function showRecipeDetails(recipe) {
  router.push({ name: 'RecipeDetails', params: { id: recipe.id } })
}

const filteredRecipes = computed(() => {
  if (!collections.activeCollectionID) return collections.recipes
  return collections.recipes.filter((recipe) => recipeIsInCollection(recipe, collections.activeCollectionID))
})

</script>

<style lang="scss" scoped>
.recipe-card {
  cursor: pointer;
  width: 100%;
  max-width: 225px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
  .link-button {
    position: absolute;
    top: -38px;
    right: 3px;
  }
}
.recipe-details-card {
  width: 90vw;
  max-width: 1000px;
  padding: 30px;
}
</style>
