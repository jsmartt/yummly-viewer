<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="print-hide">
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

        <q-btn flat round dense disable>
          <q-icon name="help_outline" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="print-hide"
    >
      <q-list>
        <q-item clickable :disable="!collections.loaded || true">
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
          @click="viewCollection(null)"
        >
          <q-item-section>
            <q-item-label class="text-subtitle1">All Likes</q-item-label>
          </q-item-section>
          <q-item-section side>{{ collections.recipes.length }}</q-item-section>
        </q-item>

        <q-separator/>

        <q-item>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-center">Collections</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-for="collection in sortedCollections"
          :key="collection.name"
          :active="collections.activeCollectionID === collection.name"
          clickable
          @click="viewCollection(collection.name)"
        >
          <q-item-section>
            <q-item-label>{{ collection.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>{{ collection.count }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { computed, provide, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { useCollections } from 'stores/collections';
const collections = useCollections();
const { loaded } = storeToRefs(collections)

const sortedCollections = computed(() => {
  return Object.keys(collections.collections).sort().map((key) => { return { name: key, count: collections.collections[key] } })
})

function viewCollection(collection) {
  collections.setActiveCollection(collection)
  router.push({ name: 'Home' })
}

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

provide('leftDrawerOpen', leftDrawerOpen)
</script>
