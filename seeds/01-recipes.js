exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Granny's Apple Pie" },
        { recipe_name: "Mom's Oatmeal" },
        { recipe_name: "Auntie Fee's Scrambled Eggs" }
      ]);
    });
};
