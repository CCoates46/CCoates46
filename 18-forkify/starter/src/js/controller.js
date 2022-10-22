import * as model from './model.js'
import recipeView from './views/recipeView.js'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
    // get the ID from the url and remove the # symbol from in front to enable
    // it to be dynamic
    const id = window.location.hash.slice(1)

    // guard clause
    if(!id) return
    recipeView.renderSpinner()

    // 1) Loading recipe
    // this loadRecipe function is an async function so we need to await the 
    // promise
    await model.loadRecipe(id)

      // 2) Rendering recipe
    // model.state.recipe is the data that we have just received in step 1
    // that data is passed into the receipeView render method
    // this will then take that data and store it inside the #data in the receipView.js
      recipeView.render(model.state.recipe)

  } catch (err) {
    alert(err)
  }
}

// create an array to handle multiple eventlistener events
const events = ['hashchange', 'load']
events.forEach(ev => window.addEventListener(ev, controlRecipes))
// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)