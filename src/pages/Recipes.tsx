import { useState } from "react";
import Navigation from "@/components/Navigation";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { recipes } from "@/data/recipes";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Our Recipe Collection
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Explore 10 delicious Indian vegetarian recipes
            </p>
            <div className="flex justify-center">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No recipes found. Try a different search term!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 RecipeHub. All recipes crafted with love.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Recipes;
