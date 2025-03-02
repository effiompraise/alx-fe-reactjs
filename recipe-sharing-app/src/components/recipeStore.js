import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set, get) => ({
      // Recipe list and basic actions
      recipes: [],
      favorites: [],
      addRecipe: (newRecipe) => set((state) => ({ 
        recipes: [...state.recipes, newRecipe] 
      })),
      updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe => 
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      })),
      deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
        // Also remove from favorites if it was favorited
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      setRecipes: (recipes) => set({ recipes }),
      
      // Search functionality
      searchTerm: '',
      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
      },
      filteredRecipes: [],
      filterRecipes: () => set((state) => ({
        filteredRecipes: state.searchTerm 
          ? state.recipes.filter(recipe =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
              recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : [...state.recipes]
      })),
      
      // Favorites functionality
      favorites: [],
      addFavorite: (recipeId) => set((state) => ({ 
        favorites: [...state.favorites, recipeId] 
      })),
      removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      isFavorite: (recipeId) => get().favorites.includes(recipeId),
      
      // Recommendations functionality
      recommendations: [],
      generateRecommendations: () => set((state) => {
        // If there are no favorites, recommend random recipes
        if (state.favorites.length === 0) {
          return { 
            recommendations: state.recipes
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
          };
        }
        
        // Otherwise, find recipes similar to favorites
        // This is a simple algorithm - in real life, you'd use more sophisticated methods
        const recsByTitle = new Set();
        
        // Find recipes with similar titles to favorites
        state.favorites.forEach(favId => {
          const favorite = state.recipes.find(r => r.id === favId);
          if (!favorite) return;
          
          // Get keywords from the title
          const keywords = favorite.title
            .toLowerCase()
            .split(' ')
            .filter(word => word.length > 3);
          
          // Find recipes with those keywords
          keywords.forEach(keyword => {
            state.recipes.forEach(recipe => {
              if (recipe.id !== favId && // Not the same recipe
                  !state.favorites.includes(recipe.id) && // Not already a favorite
                  recipe.title.toLowerCase().includes(keyword)) {
                recsByTitle.add(recipe.id);
              }
            });
          });
        });
        
        // Convert Set to array and get the recipes
        const recommendations = [...recsByTitle]
          .map(id => state.recipes.find(r => r.id === id))
          .filter(Boolean)
          .slice(0, 3);
        
        // If not enough recommendations, add some random ones
        if (recommendations.length < 3) {
          const randomRecs = state.recipes
            .filter(r => 
              !state.favorites.includes(r.id) && 
              !recommendations.some(rec => rec.id === r.id)
            )
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - recommendations.length);
          
          recommendations.push(...randomRecs);
        }
        
        return { recommendations };
      }),
    }),
    {
      name: 'recipe-storage', // name of the item in localStorage
      getStorage: () => localStorage, // storage to use
    }
  )
);

export default useRecipeStore;