import { create } from 'zustand';


const useRecipeStore = create((set) => ({
  
  recipes: [],
  
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  setRecipes: (recipes) => set({ recipes }),

  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Automatically filter recipes when search term changes
    get().filterRecipes();
  },
  
  // Filtered results
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.searchTerm 
      ? state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : [...state.recipes] // If no search term, show all recipes
  })),
}));

export default useRecipeStore;