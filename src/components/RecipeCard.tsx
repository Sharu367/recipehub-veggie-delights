import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <article className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-[1.02] animate-fade-in">
        <div className="aspect-square overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {recipe.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default RecipeCard;
