

const tapTheBtn = () => {

    const searchText = document.getElementById('food-name-input-field').value;
    console.log(searchText)
    loadMeals(searchText)
}







const loadMeals = (searchText) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))



}


const displayMeals = meals => {

    const mainContainer = document.getElementById('container-of-section')
    mainContainer.innerText = "";

    meals.forEach(meal => {


        const cardDisplay = document.createElement('div')
        cardDisplay.classList.add('col')




        cardDisplay.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

    
            
        </div>
      </div>
        
        `



        mainContainer.appendChild(cardDisplay)

    });


}


const loadMealDetails = async () => {

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

