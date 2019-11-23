const db = require("../data");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select("i.ingredient_name AS Ingredient", "r.quantity AS Quantity")
    .from("recipe_ingredients AS r")
    .innerJoin("ingredients AS i", "i.id", "r.ingredient_id")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("recipe_steps").where({ recipe_id });
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
