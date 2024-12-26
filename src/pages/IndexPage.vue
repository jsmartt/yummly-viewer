<template>
  <q-page class="q-pa-md">
    <div v-if="!collections.loaded" class="flex flex-center absolute-center q-px-md" style="width: 100%;">
      <load-file />
    </div>
    <div v-else>
      <recipe-list />
    </div>
  </q-page>
</template>

<script setup>
import LoadFile from 'components/LoadFile.vue'
import RecipeList from 'components/RecipeList.vue'

import { useCollections } from 'stores/collections';
const collections = useCollections();
</script>
