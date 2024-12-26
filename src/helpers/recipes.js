import { get as _get } from 'lodash';

function recipeCollections(recipe) {
  return recipe.collections || _get(recipe, ['display', 'collections'])
}
function recipeDescription(recipe) {
  return _get(recipe, ['content', 'description', 'text']) || _get(recipe, ['seo', 'web', 'meta-tags', 'description'])
}

function recipeID(recipe) {
  return _get(recipe, ['content', 'details', 'recipeId']) || recipe['urb-url-id']
}

function recipeImageURL(recipe) {
  return recipe['image-url'] || _get(recipe, ['seo', 'web', 'image-url']) || _get(recipe, ['display', 'images', 0])
}

function recipeIngredients(recipe, system = 'imperial') {
  const ingredients = _get(recipe, ['content', 'ingredientLines'])
  if (!ingredients) return null
  return ingredients.map((ingredient) => {
    let quantity = _get(ingredient, ['amount', system, 'quantity']) || ingredient.quantity
    let unit = ingredient.unit
    try {
      if (!isNaN(quantity) && quantity > 1) {
        const plural = _get(ingredient, ['amount', system, 'unit', 'plural'])
        if (plural) unit = plural
      }
    } catch(e) {
      console.warn(`Failed to parse ingredient (${ingredient.ingredient}) unit: ${e}`)
    }
    const parts = [quantity, unit, ingredient.ingredient]
    return parts.filter(p => (p != null && p != "")).join(' ')
  })
}

function recipeIsInCollection(recipe, collection) {
  const collections = recipeCollections(recipe)
  if (collections) {
    return collections.includes(collection)
  }
  return false
}

function recipeName(recipe) {
  return recipe['title'] || _get(recipe, ['display', 'displayName']) || _get(recipe, ['content', 'details', 'name'])
}

function recipeServings(recipe) {
  return _get(recipe, ['content', 'details', 'numberOfServings']) || null
}

function recipeSourceName(recipe) {
  return recipe['display-name'] || _get(recipe, ['display', 'source', 'sourceDisplayName']) || _get(recipe, ['content', 'details', 'displayName'])
}

function recipeSteps(recipe) {
  return _get(recipe, ['content', 'preparationSteps']) || null
}

function recipeTime(recipe) {
  return _get(recipe, ['content', 'details', 'totalTime']) || null
}

function recipeURL(recipe) {
  const urls = [
    recipe['url'],
    _get(recipe, ['content', 'alternateExternalUrls', 'source-amp-view-url']),
    _get(recipe, ['display', 'source', 'sourceRecipeUrl']),
    _get(recipe, ['content', 'details', 'directionsUrl']),
  ]
  return urls.find(url => url && !url.startsWith('https://www.yummly.com') && !url.startsWith('http://www.yummly.com'))
}

function recipeVideoURL(recipe) {
  return _get(recipe, ['content', 'videos', 'originalVideoUrl']) || null
}

export {
  recipeCollections,
  recipeDescription,
  recipeID,
  recipeImageURL,
  recipeIngredients,
  recipeIsInCollection,
  recipeName,
  recipeServings,
  recipeSourceName,
  recipeSteps,
  recipeTime,
  recipeURL,
  recipeVideoURL,
}
