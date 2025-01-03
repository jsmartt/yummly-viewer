<template>
  <div>
    <div class="row q-gutter-md">
      <div class="col-sm-6 col-xs-12">
        <div class="text-h5 q-mb-sm">{{ recipeName(recipe) || 'unknown title' }}</div>
        <div class="text-subtitle2 text-weight-regular q-mb-lg">{{ recipeSourceName(recipe) || 'unknown source' }}</div>
        <div class="row q-my-lg">
          <div v-if="!!recipeIngredients(recipe)" class="col">
            <div class="text-h5 text-weight-regular">{{ recipeIngredients(recipe).length }}</div>
            <div>Ingredients</div>
          </div>
          <div v-if="recipeTime(recipe)" class="col">
            <div class="text-h5 text-weight-regular">{{ recipeTime(recipe) }}</div>
            <div>Total Time</div>
          </div>
        </div>
        <div class="row q-my-lg block">
          <div v-if="!!recipeServings(recipe)">Servings: {{ recipeServings(recipe) }}</div>
          <div v-if="!!recipeCollections(recipe).length">Collections: {{ recipeCollections(recipe).sort().join(', ') }}</div>
        </div>
        <div class="row q-gutter-sm justify-start print-hide">
          <q-btn color="primary" icon="print" label="Print" class="col-auto" @click="print" />
          <q-btn color="primary" icon="file_download" label="Download" class="col-auto hidden" disable />
          <q-btn v-if="recipeURL(recipe)" :href="recipeURL(recipe)" target="_blank" color="accent" icon="open_in_new" label="Go to Recipe" class="col-auto" />
        </div>
      </div>
      <div class="col">
        <div v-if="recipeVideoURL(recipe)">
          <q-img :src="recipeImageURL(recipe)" width="100%" class="main-image rounded-borders print-only" loading="eager" />
          <video width="100%" controls autoplay loop class="rounded-borders print-hide">
            <source :src="recipeVideoURL(recipe)" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <q-img v-else :src="recipeImageURL(recipe)" width="100%" class="main-image rounded-borders" />
      </div>
    </div>

    <q-separator class="q-my-lg"/>

    <div v-if="!!recipeDescription(recipe)">
      <div class="text-h6 q-my-md">Description</div>
      <div>{{ recipeDescription(recipe) }}</div>
    </div>

    <div v-if="!!recipeIngredients(recipe)" class="q-mt-xl">
      <div class="text-h6 q-my-md">Ingredients</div>
      <ul>
        <li v-for="(ingredient, i) in recipeIngredients(recipe)" :key="i" class="q-mb-xs">
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div v-if="!!recipeSteps(recipe)" class="q-mt-xl">
      <div class="text-h6 q-my-md">Directions</div>
      <ol>
        <li v-for="(step, i) in recipeSteps(recipe)" :key="i" class="q-pl-sm q-mb-md">
          {{ step }}
        </li>
      </ol>
    </div>

    <q-separator class="q-my-lg print-hide"/>

    <q-expansion-item
      v-model="codeExpanded"
      icon="code"
      label="Code View"
      caption="JSON"
      class="print-hide"
    >
      <pre class="code rounded-borders"><code>{{ recipeJSON }}</code></pre>
    </q-expansion-item>
  </div>
</template>

<script setup>
const recipe = defineModel({ required: true })

import { computed, ref } from 'vue'

import {
  recipeCollections,
  recipeDescription,
  recipeImageURL,
  recipeIngredients,
  recipeName,
  recipeServings,
  recipeSourceName,
  recipeSteps,
  recipeTime,
  recipeURL,
  recipeVideoURL

} from 'src/helpers/recipes'

const codeExpanded = ref(false)

const recipeJSON = computed(() => {
  return JSON.stringify(recipe.value, null, 2)
})

function print() {
  window.print()
}

</script>

<style lang="scss" scoped>
.main-image {
  max-height: 350px;
}
.code {
  margin: 15px;
  padding: 10px;
  background-color: #e8e8e8;
  overflow: scroll;
  max-height: 80vh;
}
@media print {
  .main-image {
    max-height: 300px;
  }
}
</style>
