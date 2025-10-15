export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  nutrition?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}
