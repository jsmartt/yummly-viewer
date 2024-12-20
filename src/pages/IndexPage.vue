<template>
  <q-page class="flex q-pa-md">
    <div v-if="!collections.loaded" class="flex flex-center" style="width: 100%;">
      <load-file />
    </div>
    <div v-else>
      TODO
    </div>
  </q-page>
</template>

<script setup>
import LoadFile from 'components/LoadFile.vue'

// import { ref, watch } from 'vue'

import { useCollections } from 'stores/collections';
const collections = useCollections();
</script>
