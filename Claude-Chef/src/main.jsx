import React from "react"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"
import { getRecipeFromMistral } from "./ai"

export default function Main(){
    const [ingredients,setIngredients] = React.useState(["apple","banana","cumin","jeera"])
    const [recipe,setRecipe]=React.useState("")
    async function getRecipe(){
        const recipeMarkdown=await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function handleSubmit(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredient=>[...prevIngredient,newIngredient])
       

    }
    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                    <input
                     type="text" 
                     placeholder="e.g. oregano" 
                     className="ingredients-name" 
                     aria-label="Add Ingredients"
                     name="ingredient" required></input>
                    <button className="ingredients-btn">+ Add Ingredients</button>
        </form>
         {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                   getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}