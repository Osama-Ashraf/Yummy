export default class Details{
    constructor(meal){
        $(this).ready(()=>{
            $('.loading-screen').fadeOut(500);
        });
        this.display(meal);
        $('#search').css('opacity','0');
        $('.loading-screen').fadeIn(0);
        $('#btnClose').click(()=>{
            $('#data').toggleClass('d-none');
            $('#details').addClass('d-none');
            $('#search').css('opacity',1)
        });
        
        
    }

    display(meal){
        const cartona = `
        <div class="col-md-4">
                    <img  class="w-100 rounded-3" src="${meal.strMealThumb}">
                        <h2>${meal.strMeal}</h2>
                </div>
                <div class="col-md-8">
                <div class="d-flex justify-content-between">
                    <h2>Instructions</h2>
                    <button class="btn-close btn-close-white" id="btnClose"></button>
                </div>
                
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
    
                    <a target="_blank" href="${meal.strSource}" class="btn btn-primary">Source</a>
                    <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
                </div>`;

        $('#details').html(cartona);
        $('#data').toggleClass('d-none');
        $('#details').toggleClass('d-none');
        
    }
}