export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientList=ingredients.map((data)=>{
        return <li key={data}>{data}</li>
        
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log("Form Submitted")
        const formData=new FormData(event.currentTarget)
        const  newIngredient=formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                    <input
                     type="text" 
                     placeholder="e.g. oregano" 
                     className="ingredients-name" 
                     aria-label="Add Ingredients"
                     name="ingredient"></input>
                    <button className="ingredients-btn">+ Add Ingredients</button>
        </form>
        <ul>
            {ingredientList}
        </ul>
        </main>
    )
}