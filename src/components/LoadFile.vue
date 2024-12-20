<template>
  <div>
    <div>
      <h5 class="q-mb-sm">Step 1: Download your collections</h5>
      <div>
        To use this site, you must first download your Yummly collections using the
        <a href="https://chromewebstore.google.com/detail/yummly-collections-downlo/knonlpablinjnhbmcijlifdkghjoeddn">
          Yummly Collections Downloader Chrome extension</a>.
      </div>
    </div>
    <div>
      <h5 class="q-mb-sm">Step 2: Load the file here</h5>
      <div>
        The file is loaded in memory on this web page. It is not persisted, so don't refresh the page while you're working.
      </div>
      <q-file
        v-model="uploadedFile"
        label="Click here to select a file"
        :loading="loading"
        :disable="loading"
        accept=".json"
        counter
        filled
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="file_upload" @click.stop.prevent />
        </template>
        <template v-slot:error>
          <div v-if="error" class="text-negative">{{ error }}</div>
          <q-icon name="file_upload" @click.stop.prevent />
        </template>
      </q-file>
      <div v-show="loading" class="text-center">
        <div>Loading</div>
        <q-spinner-dots color="accent" size="3em" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import { useCollections } from 'stores/collections';
const collections = useCollections();

const loading = ref(false)
const uploadedFile = ref(null)
const error = ref(null)

watch(uploadedFile, async (f) => {
  if (f) {
    loading.value = true
    let content = null
    try {
      content = await f.text()
    } catch (err) {
      error.value = 'Failed to load file contents: ' + err.message
    }
    try {
      let data = JSON.parse(content)
      collections.loadData(data)
    } catch (err) {
      error.value = 'Failed to parse file contents as JSON: ' + err.message
    }
    loading.value = false
  } else {
    collections.$reset()
  }
})
</script>
