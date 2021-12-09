fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then((response) => response.json())
    .then((data) => {
        const refeicao = data.meals[0]
        const { strMeal, idMeal, strArea, strInstructions } = refeicao
        const ingredientes = []

        for (i = 1; i < 20; i++) {
            const name = `strIngredient${i}`
            if (refeicao[name] && refeicao[name] !== '') {
                ingredientes.push(refeicao[name])
            }
        }

        console.log('Exercício 2: ')
        console.log({
            nome: strMeal,
            id: idMeal,
            regiao: strArea,
            instrucoes: strInstructions,
            ingredientes: ingredientes.join(', ')
        })
    })
