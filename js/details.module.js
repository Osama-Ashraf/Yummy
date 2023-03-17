import {Home} from './home.module.js'
export default class Details{
    constructor(meal){
        this.display(meal);
        $('#btnClose').click(()=>{
            $('#data').toggleClass('d-none');
            $('#details').toggleClass('d-none');
        });
    }

    display(meal){
        const cartona = `
        <button class="btn-close btn-close-white" id="btnClose"></button>
        <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${meal.strMealThumb}">
                        <h2>${meal.strMeal}</h2>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>${meal.strInstructions}</p>
                    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                    <h3>Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="alert alert-info m-2 p-1">1 cup  Lentils</li><li class="alert alert-info m-2 p-1">1 large Onion</li><li class="alert alert-info m-2 p-1">1 large Carrots</li><li class="alert alert-info m-2 p-1">1 tbs Tomato Puree</li><li class="alert alert-info m-2 p-1">2 tsp Cumin</li><li class="alert alert-info m-2 p-1">1 tsp  Paprika</li><li class="alert alert-info m-2 p-1">1/2 tsp Mint</li><li class="alert alert-info m-2 p-1">1/2 tsp Thyme</li><li class="alert alert-info m-2 p-1">1/4 tsp Black Pepper</li><li class="alert alert-info m-2 p-1">1/4 tsp Red Pepper Flakes</li><li class="alert alert-info m-2 p-1">4 cups  Vegetable Stock</li><li class="alert alert-info m-2 p-1">1 cup  Water</li><li class="alert alert-info m-2 p-1">Pinch Sea Salt</li>
                    </ul>
    
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
            <li class="alert alert-danger m-2 p-1">Soup</li>
                    </ul>
    
                    <a target="_blank" href="${meal.strSource}">Source</a>
                    <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
                </div>`;

        $('#details').html(cartona);
        $('#data').toggleClass('d-none');
        $('#details').toggleClass('d-none');
        
    }
}