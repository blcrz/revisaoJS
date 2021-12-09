fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((data) => {
        const meals = data.meals.filter((el, i) => i < 10).map(el => { return { nome : el.strMeal }})
        console.log(meals)
    })
