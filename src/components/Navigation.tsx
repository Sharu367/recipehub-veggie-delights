import { Link, useLocation } from "react-router-dom";
import { ChefHat } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <ChefHat className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-playfair font-bold text-foreground">
              RecipeHub
            </span>
          </Link>
          
          <div className="flex gap-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className={`font-inter font-medium transition-colors ${
                isActive("/recipes") || location.pathname.startsWith("/recipe/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Recipes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
