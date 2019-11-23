exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        {
          recipe_id: 1,
          instruction: "Cut apples."
        },
        {
          recipe_id: 1,
          instruction: "Mix milk, eggs and flour in a large mixing bowl."
        },
        {
          recipe_id: 1,
          instruction: "Take dough and cut into lattice pattern."
        },
        {
          recipe_id: 1,
          instruction:
            "Put cut apples into pie plate; cover with dough lattice."
        },
        {
          recipe_id: 1,
          instruction: "Bake at 350º for 40 minutes."
        },
        {
          recipe_id: 2,
          instruction: "Bring 1.5 cups of water to a boil."
        },
        {
          recipe_id: 2,
          instruction: "Add oats to boiling water. Boil for 5 minutes."
        },
        {
          recipe_id: 2,
          instruction:
            "Add milk. Continue to boil for 3 minutes then reduce to simmer."
        },
        {
          recipe_id: 2,
          instruction:
            "Stir in sugar. Simmer for 5 more minutes, then remove from heat."
        },
        {
          recipe_id: 2,
          instruction: "Enjoy!"
        },
        {
          recipe_id: 3,
          instruction: "Mix eggs with milk."
        },
        {
          recipe_id: 3,
          instruction: "Stir in salt and pepper."
        },
        {
          recipe_id: 3,
          instruction: "Add eggs to pan, fry and stir for 5 minutes."
        },
        {
          recipe_id: 3,
          instruction: "Serve warm."
        }
      ]);
    });
};
