const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const meal = data.meals[0];

        
        const recipeTitle = meal.strMeal;
        const recipeInstructions = meal.strInstructions;

        
        const recipeTitleElement = document.getElementById('recipe-title');
        const recipeInstructionsElement = document.getElementById('recipe-instructions');

        recipeTitleElement.textContent = recipeTitle;
        recipeInstructionsElement.textContent = recipeInstructions;
    })
    .catch(error => {
        console.error('Error:', error);
    });