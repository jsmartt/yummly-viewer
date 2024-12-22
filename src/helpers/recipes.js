import { get as _get } from 'lodash';

function recipeCollections(recipe) {
  return recipe.collections || _get(recipe, ['display', 'collections'])
}

function recipeID(recipe) {
  return recipe['tracking-id'] || recipe['urb-url-id']
}

function recipeImageURL(recipe) {
  return recipe['image-url'] || _get(recipe, ['seo', 'web', 'image-url']) || _get(recipe, ['display', 'images', 0])
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

function recipeSourceName(recipe) {
  return recipe['display-name'] || _get(recipe, ['display', 'source', 'sourceDisplayName']) || _get(recipe, ['content', 'details', 'displayName'])
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

export {
  recipeCollections, recipeID, recipeImageURL, recipeIsInCollection, recipeName, recipeSourceName, recipeURL
}
