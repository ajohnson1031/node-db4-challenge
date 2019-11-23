exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name")
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("recipes.id");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .references("ingredients.id");
      tbl.integer("quantity").notNullable();
    })
    .createTable("recipe_steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("recipes.id");
      tbl.text("instruction").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
