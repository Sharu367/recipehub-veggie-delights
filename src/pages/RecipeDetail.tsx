import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { recipes } from "@/data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/recipes">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Recipes
            </Button>
          </Link>

          <article className="bg-card rounded-lg overflow-hidden shadow-card animate-fade-in">
            <div className="aspect-video md:aspect-[21/9] overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
                    {recipe.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {recipe.description}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Prep Time</p>
                    <p className="font-semibold">{recipe.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Servings</p>
                    <p className="font-semibold">{recipe.servings}</p>
                  </div>
                </div>
                {recipe.nutrition && (
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Calories</p>
                      <p className="font-semibold">{recipe.nutrition.calories}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Instructions
                  </h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-hero text-white font-semibold flex-shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-foreground pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {recipe.nutrition && (
                <div className="bg-muted rounded-lg p-6">
                  <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Nutrition Information
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Calories</p>
                      <p className="text-lg font-semibold">{recipe.nutrition.calories}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Protein</p>
                      <p className="text-lg font-semibold">{recipe.nutrition.protein}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Carbs</p>
                      <p className="text-lg font-semibold">{recipe.nutrition.carbs}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fat</p>
                      <p className="text-lg font-semibold">{recipe.nutrition.fat}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
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

export default RecipeDetail;
