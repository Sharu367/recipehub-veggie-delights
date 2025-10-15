import { Recipe } from "@/types/recipe";
import paneerImage from "@/assets/paneer-butter-masala.jpg";
import pulaoImage from "@/assets/veg-pulao.jpg";
import alooGobiImage from "@/assets/aloo-gobi.jpg";
import dosaImage from "@/assets/masala-dosa.jpg";
import palakImage from "@/assets/palak-paneer.jpg";
import choleImage from "@/assets/chole.jpg";
import biryaniImage from "@/assets/veg-biryani.jpg";
import dalImage from "@/assets/moong-dal.jpg";
import upmaImage from "@/assets/rava-upma.jpg";
import sandwichImage from "@/assets/veg-sandwich.jpg";

export const recipes: Recipe[] = [
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Creamy and rich tomato-based curry with soft paneer cubes",
    image: paneerImage,
    prepTime: "30 minutes",
    servings: "4",
    ingredients: [
      "250g paneer, cubed",
      "2 large tomatoes, pureed",
      "1 large onion, finely chopped",
      "2 tbsp butter",
      "1 tbsp oil",
      "1 tsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 tsp garam masala",
      "1/2 cup heavy cream",
      "Fresh cilantro for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Heat butter and oil in a pan. Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook for 1 minute until fragrant.",
      "Pour in tomato puree and cook for 5-7 minutes until oil separates.",
      "Add red chili powder, turmeric, and salt. Mix well.",
      "Add paneer cubes and gently mix to coat with the gravy.",
      "Pour in heavy cream and garam masala. Simmer for 5 minutes.",
      "Garnish with fresh cilantro and serve hot with naan or rice."
    ],
    nutrition: {
      calories: "380",
      protein: "15g",
      carbs: "18g",
      fat: "28g"
    }
  },
  {
    id: "veg-pulao",
    name: "Vegetable Pulao",
    description: "Aromatic basmati rice cooked with mixed vegetables and spices",
    image: pulaoImage,
    prepTime: "25 minutes",
    servings: "4",
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables (carrots, peas, beans)",
      "1 large onion, sliced",
      "2 tbsp ghee or oil",
      "1 bay leaf",
      "4-5 whole peppercorns",
      "2-3 cloves",
      "1 cinnamon stick",
      "1 tsp cumin seeds",
      "Salt to taste",
      "Fresh mint leaves for garnish"
    ],
    instructions: [
      "Wash and soak rice for 20 minutes. Drain well.",
      "Heat ghee in a heavy-bottomed pot. Add whole spices and let them crackle.",
      "Add sliced onions and fry until golden brown.",
      "Add mixed vegetables and sauté for 3-4 minutes.",
      "Add drained rice and gently mix with vegetables.",
      "Pour 4 cups of water and add salt. Bring to a boil.",
      "Cover and cook on low heat for 15-20 minutes until rice is cooked.",
      "Garnish with fresh mint and serve with raita."
    ],
    nutrition: {
      calories: "320",
      protein: "8g",
      carbs: "58g",
      fat: "7g"
    }
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    description: "Classic dry curry with potatoes and cauliflower in aromatic spices",
    image: alooGobiImage,
    prepTime: "35 minutes",
    servings: "4",
    ingredients: [
      "2 medium potatoes, cubed",
      "1 medium cauliflower, cut into florets",
      "1 large onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp coriander powder",
      "1/2 tsp red chili powder",
      "1 tsp cumin seeds",
      "2 tbsp oil",
      "Fresh cilantro",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until translucent.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add tomatoes and cook until soft and mushy.",
      "Add all the dry spices and salt. Mix well.",
      "Add potato cubes and cauliflower florets. Stir to coat with masala.",
      "Cover and cook on medium heat for 20-25 minutes, stirring occasionally.",
      "Garnish with fresh cilantro and serve hot with roti."
    ],
    nutrition: {
      calories: "180",
      protein: "5g",
      carbs: "32g",
      fat: "5g"
    }
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe filled with spiced potato mixture",
    image: dosaImage,
    prepTime: "40 minutes (plus fermenting time)",
    servings: "4",
    ingredients: [
      "2 cups dosa rice",
      "1 cup urad dal",
      "4-5 boiled potatoes, mashed",
      "1 large onion, chopped",
      "2 green chilies, chopped",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "8-10 curry leaves",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice and dal separately for 6-8 hours. Grind to smooth batter and ferment overnight.",
      "For filling: Heat oil, add mustard and cumin seeds. Let them crackle.",
      "Add curry leaves, onions, and green chilies. Sauté until onions are soft.",
      "Add turmeric and mashed potatoes. Mix well and cook for 5 minutes.",
      "Heat a dosa pan, pour a ladleful of batter and spread in circular motion.",
      "Drizzle oil around edges. Cook until golden and crispy.",
      "Place potato filling in center, fold the dosa and serve hot.",
      "Serve with coconut chutney and sambar."
    ],
    nutrition: {
      calories: "250",
      protein: "7g",
      carbs: "48g",
      fat: "4g"
    }
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    description: "Nutritious spinach curry with soft paneer cubes",
    image: palakImage,
    prepTime: "30 minutes",
    servings: "4",
    ingredients: [
      "250g paneer, cubed",
      "500g fresh spinach",
      "1 large onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "2 green chilies",
      "1 tsp cumin seeds",
      "1/2 tsp garam masala",
      "1/4 cup fresh cream",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Blanch spinach in boiling water for 2 minutes. Cool and blend to smooth paste.",
      "Heat oil in a pan. Add cumin seeds and let them crackle.",
      "Add chopped onions and sauté until golden.",
      "Add ginger-garlic paste and green chilies. Cook for 1 minute.",
      "Add chopped tomatoes and cook until soft.",
      "Add spinach puree and salt. Cook for 5-7 minutes.",
      "Add garam masala and cream. Mix well.",
      "Add paneer cubes and simmer for 3-4 minutes. Serve hot."
    ],
    nutrition: {
      calories: "290",
      protein: "16g",
      carbs: "14g",
      fat: "20g"
    }
  },
  {
    id: "chole",
    name: "Chole (Chickpea Curry)",
    description: "Spicy and tangy chickpea curry with aromatic spices",
    image: choleImage,
    prepTime: "35 minutes (plus soaking time)",
    servings: "4",
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "2 large onions, finely chopped",
      "3 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "2 tsp chole masala",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 bay leaf",
      "2 tbsp oil",
      "Fresh cilantro and onion rings for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook soaked chickpeas with salt and tea bag for 15 minutes.",
      "Heat oil in a pan. Add cumin seeds and bay leaf.",
      "Add chopped onions and cook until golden brown.",
      "Add ginger-garlic paste and sauté for 1 minute.",
      "Add tomato puree and cook until oil separates.",
      "Add all dry spices and salt. Mix well.",
      "Add cooked chickpeas with some water. Simmer for 15 minutes.",
      "Garnish with cilantro and onion rings. Serve with bhature or kulcha."
    ],
    nutrition: {
      calories: "310",
      protein: "14g",
      carbs: "48g",
      fat: "8g"
    }
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    description: "Fragrant layered rice with mixed vegetables and aromatic spices",
    image: biryaniImage,
    prepTime: "50 minutes",
    servings: "4",
    ingredients: [
      "2 cups basmati rice",
      "2 cups mixed vegetables",
      "1 large onion, sliced",
      "1 cup yogurt",
      "1 tsp ginger-garlic paste",
      "2 bay leaves",
      "4-5 cloves",
      "2 cinnamon sticks",
      "1 tsp biryani masala",
      "Pinch of saffron in warm milk",
      "3 tbsp ghee",
      "Fresh mint and cilantro",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice for 30 minutes. Par-boil with whole spices until 70% cooked.",
      "Heat ghee, fry onions until golden. Reserve half for garnish.",
      "Add ginger-garlic paste and vegetables. Sauté for 5 minutes.",
      "Add yogurt, biryani masala, and salt. Cook for 5 minutes.",
      "In a heavy pot, layer vegetable mixture and rice alternately.",
      "Top with fried onions, saffron milk, and herbs.",
      "Cover with tight lid. Cook on low heat for 20 minutes (dum).",
      "Serve hot with raita and pickle."
    ],
    nutrition: {
      calories: "420",
      protein: "10g",
      carbs: "68g",
      fat: "12g"
    }
  },
  {
    id: "moong-dal",
    name: "Moong Dal Tadka",
    description: "Comforting yellow lentil soup with aromatic tempering",
    image: dalImage,
    prepTime: "30 minutes",
    servings: "4",
    ingredients: [
      "1 cup moong dal (yellow lentils)",
      "1 large onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric powder",
      "1 tsp cumin seeds",
      "2-3 dried red chilies",
      "Pinch of asafoetida",
      "2 tbsp ghee",
      "Fresh cilantro",
      "Salt to taste"
    ],
    instructions: [
      "Wash dal thoroughly and pressure cook with turmeric and salt for 3-4 whistles.",
      "Mash the dal slightly and keep aside.",
      "Heat ghee in a pan. Add cumin seeds, red chilies, and asafoetida.",
      "Add chopped onions and sauté until translucent.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add tomatoes and cook until soft.",
      "Pour this tempering over the dal and mix well.",
      "Garnish with fresh cilantro and serve hot with rice or roti."
    ],
    nutrition: {
      calories: "210",
      protein: "12g",
      carbs: "32g",
      fat: "4g"
    }
  },
  {
    id: "rava-upma",
    name: "Rava Upma",
    description: "Savory semolina breakfast dish with vegetables and spices",
    image: upmaImage,
    prepTime: "20 minutes",
    servings: "4",
    ingredients: [
      "1 cup rava (semolina)",
      "1/2 cup mixed vegetables (carrots, peas, beans)",
      "1 large onion, chopped",
      "2 green chilies, chopped",
      "1 tsp mustard seeds",
      "1 tsp urad dal",
      "8-10 curry leaves",
      "2 tbsp oil or ghee",
      "2.5 cups water",
      "Cashews for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Dry roast rava in a pan until fragrant. Keep aside.",
      "Heat oil in a pan. Add mustard seeds and urad dal.",
      "Add curry leaves, green chilies, and cashews. Fry until golden.",
      "Add chopped onions and sauté until translucent.",
      "Add mixed vegetables and sauté for 2-3 minutes.",
      "Pour water and add salt. Bring to a boil.",
      "Add roasted rava slowly while stirring continuously to avoid lumps.",
      "Cover and cook on low heat for 5 minutes. Serve hot."
    ],
    nutrition: {
      calories: "240",
      protein: "6g",
      carbs: "42g",
      fat: "6g"
    }
  },
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    description: "Grilled sandwich loaded with fresh vegetables and cheese",
    image: sandwichImage,
    prepTime: "15 minutes",
    servings: "2",
    ingredients: [
      "4 bread slices",
      "1 large potato, boiled and sliced",
      "1 large tomato, sliced",
      "1 cucumber, sliced",
      "1 onion, sliced",
      "2 cheese slices",
      "2 tbsp butter",
      "Green chutney",
      "Tomato ketchup",
      "Chat masala",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Butter one side of each bread slice.",
      "Apply green chutney on the other side of two slices.",
      "Layer boiled potato slices, sprinkle chat masala and salt.",
      "Add tomato, cucumber, and onion slices.",
      "Place cheese slices on top.",
      "Cover with remaining bread slices (buttered side out).",
      "Grill in a sandwich maker or pan until golden and crispy.",
      "Serve hot with ketchup and green chutney."
    ],
    nutrition: {
      calories: "340",
      protein: "12g",
      carbs: "46g",
      fat: "12g"
    }
  }
];
