<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Yummly Collection Viewer
        </q-toolbar-title>

        <q-btn flat round dense>
          <q-icon name="help_outline" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item clickable :disable="!collections.loaded">
          <q-item-section avatar>
            <q-icon name="file_download" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Export</q-item-label>
            <q-item-label caption>Download in another format</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator/>

        <q-item
          :active="collections.activeCollectionID === null"
          clickable
          @click="collections.setActiveCollection(null)"
        >
          <q-item-section>
            <q-item-label class="text-subtitle1">All Likes</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator/>

        <q-item>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-center">Collections</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-for="(count, collection) in collections.collections"
          :key="collection"
          :active="collections.activeCollectionID === collection"
          clickable
          @click="collections.setActiveCollection(collection)"
        >
          <q-item-section>
            <q-item-label>{{ collection }}</q-item-label>
          </q-item-section>
          <q-item-section side>{{ count }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useCollections } from 'stores/collections';
const collections = useCollections();
const { loaded } = storeToRefs(collections)

const leftDrawerOpen = ref(loaded.value)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

watch(loaded, (val) => {
  if (val) {
    leftDrawerOpen.value = true
  } else {
    leftDrawerOpen.value = false
  }
})
</script>
