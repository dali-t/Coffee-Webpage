'use strict';
/*  json data is from https://api.sampleapis.com/ */

document.querySelector("#iced-coffee-btn").addEventListener('click', async () => {
    try {
        const response = await fetch("data/iced.json");
        if (!response.ok) {
            throw Error(`Error: ${response.url} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        addDrinks(data);
    } catch (error) {
        console.log(error.message);
    }
})

document.querySelector("#hot-coffee-btn").addEventListener('click', async () => {
    try {
        const response = await fetch("data/hot.json");
        if (!response.ok) {
            throw Error(`Error: ${response.url} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        addDrinks(data);
    } catch (error) {
        console.log(error.message);
    }
})

function addDrinks(drinks) {
    document.querySelector('.container').innerHTML = '';
    drinks.forEach(element => {
        const article = document.createElement('article');
        article.classList.add('card');
        document.querySelector('.container').append(article);
        const image = document.createElement('img');
        article.append(image);
        image.src = element.image;
        image.alt = element.title;
        const div = document.createElement('div');
        article.append(div);
        div.classList.add('content');
        const title = document.createElement('h3');
        title.textContent = element.title;
        div.append(title);
        const para = document.createElement('p');
        para.textContent = element.description + ' Ingredients include:';
        div.append(para);
        const subDiv = document.createElement('div');
        subDiv.classList.add('ingredients');
        div.append(subDiv);
        element.ingredients.forEach(
            elem => {
                const ingredient = document.createElement('div');
                subDiv.append(ingredient);
                ingredient.textContent = elem;
                ingredient.classList.add('ingredient');
            }
        )
    });
}