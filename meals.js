const loadMeal=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))
}
const displayMeal=(meal)=>{
    const containerDiv=document.getElementById('container-details');
    containerDiv.innerHTML=``
    meal.forEach(meals=>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="details(${meals.idMeal})" class="card">
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">${meals.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        `
    containerDiv.appendChild(div);
    })
}
// search food
const search=()=>{
    const inputField=document.getElementById('input')
    const inputFieldVlue=inputField.value;
    loadMeal(inputFieldVlue);
    inputField.value='';

}
// details
const details=(idMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>loadDetails(data.meals[0]))
}
const loadDetails=meal=>{
    const detailsContainer=document.getElementById('container-details')
    detailsContainer.innerHTML=``
    const div=document.createElement('div');
    div.classList.add('card')
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    detailsContainer.appendChild(div)

}
// loadMeal('a')