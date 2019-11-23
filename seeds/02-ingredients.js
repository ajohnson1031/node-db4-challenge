exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "milk" },
        { ingredient_name: "eggs" },
        { ingredient_name: "sugar" },
        { ingredient_name: "flour" },
        { ingredient_name: "oats" },
        { ingredient_name: "salt" },
        { ingredient_name: "pepper" },
        { ingredient_name: "apples" }
      ]);
    });
};
