const express = require("express");
const recipes = require("./recipes_model.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allRecipes = await recipes.getRecipes();
    allRecipes
      ? res.json(allRecipes)
      : res.status(400).json({ message: "No recipes found." });
  } catch (error) {
    res.status(500).json({ message: "db error: ", error });
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await recipes.getShoppingList(id);
    list.length
      ? res.json(list)
      : res
          .status(400)
          .json({ message: "No ingredients found for this recipe." });
  } catch (error) {
    res.status(500).json({ message: "db error: ", error });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await recipes.getInstructions(id);
    instructions.length
      ? res.json(instructions)
      : res
          .status(400)
          .json({ message: "No instructions found for this reciper." });
  } catch (error) {
    res.status(500).json({ message: "db error: ", error });
  }
});

module.exports = router;
