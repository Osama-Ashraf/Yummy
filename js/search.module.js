import Details from "./details.module.js";
export default class Search{
    constructor(){
        $('#data').empty();
        $('#search').removeClass('d-none');
        $('#SearchByName').keyup( ()=> { 
            $('.loading-screen').fadeIn(0);
            $(this.display($('#SearchByName').val(),'s')).ready(()=>{
                $('.loading-screen').fadeOut(500);
            });
            
        });
        $('#SearchByFirstLetter').keyup( ()=> { 
            $('.loading-screen').fadeIn(0);
            $(this.display($('#SearchByFirstLetter').val(),'f')).ready(()=>{
                $('.loading-screen').fadeOut(500);
            });
            
        });
    }
    async display(term,mode){
        const api = `https://www.themealdb.com/api/json/v1/1/search.php?${mode}=${term}`;
        const data =   await this.fetchApi(api);
        const meals = data.meals;
        if(meals!=null){
            let cartona = ``;
        for(let i=0;i<meals.length;i++){
            cartona+=`<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${meals[i].strMealThumb}">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${meals[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        $('#data').html(cartona);
        $('.meal').click((e)=>{
            const meal = $($(e.target).children()[0]).text();
            this.getDetails(meal);
        })
        }
        else{
            $('#data').html('<h1>No meals found</h1>');
            $('#data').css('text-align', 'center');
        }
        
    }
    async getDetails(m){
        const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${m}`;
        const meal = await this.fetchApi(api);
        const details = new Details(meal.meals[0]);
    }

    async fetchApi(api){
        const respone = await (await fetch(api)).json();
        return respone;
    }


}