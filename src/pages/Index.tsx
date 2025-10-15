import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <ChefHat className="h-20 w-20 text-white animate-scale-in" />
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
              RecipeHub
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 font-inter">
              Explore quick, healthy, and flavorful vegetarian recipes you can make in minutes!
            </p>
            <Link to="/recipes">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-inter font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View Recipes
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                Why RecipeHub?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover authentic Indian vegetarian recipes with step-by-step instructions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow animate-fade-in">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍛</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Authentic Recipes</h3>
                <p className="text-muted-foreground">
                  Traditional Indian vegetarian dishes made simple
                </p>
              </div>

              <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Quick & Easy</h3>
                <p className="text-muted-foreground">
                  Most recipes ready in under 40 minutes
                </p>
              </div>

              <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥗</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Healthy Choices</h3>
                <p className="text-muted-foreground">
                  Nutritious vegetarian meals for the whole family
                </p>
              </div>
            </div>
          </div>
        </section>
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

export default Index;
