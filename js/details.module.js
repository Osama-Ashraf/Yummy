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
        const mealMpas = new Map(Object.entries(meal));
        let ingredients =[];

        for (const [key,value] of mealMpas) {
            if(key.includes('strIngredient') & value != ''){
                ingredients.push(value);
            }
        }

        let measures = [];
        for (const [key,value] of mealMpas) {
            if(key.includes('strMeasure') & value != ' '){
                measures.push(value);
            }
        }
        let recipes =``;
        for(let i=0;i<ingredients.length;i++){
            recipes+=`<li class="alert alert-info m-2 p-1">${measures[i]} ${ingredients[i]}</li>`;

        }

        
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
                        ${recipes}
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