<template>
  <q-page class="flex q-pa-md">
    <div v-if="!collections.loaded" class="flex flex-center" style="width: 100%;">
      <load-file />
    </div>
    <div v-else-if="!!recipe">
      <recipe-details v-model="recipe" />
    </div>
    <div v-else>
      Recipe not found
    </div>
  </q-page>
</template>

<script setup>
import LoadFile from 'components/LoadFile.vue'
import RecipeDetails from 'components/RecipeDetails.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const recipe = computed(() => {
  return collections.recipes.find((r) => r.id === route.params.id )
})

import { useCollections } from 'stores/collections';
const collections = useCollections();
</script>
