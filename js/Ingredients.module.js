import Home from './home.module.js'
export default class Ingredients{
    constructor(){
        $('.loading-screen').fadeIn(0);
        $(this).ready(()=> {
            $('.loading-screen').fadeOut(500);
        }); 
        this.display();
    }
    async display(){
        const api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
        const data =  await  this.fetchApi(api);
        const ingredients = data.meals;


        if(ingredients!=null){
            let cartona = ``;
            for(let i=0;i<ingredients.length;i++){
                cartona+=`<div class="col-md-3">
                <div class=" rounded-2 text-center cursor-pointer ingredients">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${ingredients[i].strIngredient}</h3>
                        <p>${ingredients[i].strDescription}</p>
                </div>
        </div>`;
            }
            $('#data').html(cartona);
            $('.ingredients').click((e)=>{
                let ingredient;
                if (e.target.toString().includes('HTMLHeadingElement')){
                    ingredient = $(e.target).text();
                }
                else if(e.target.toString().includes('HTMLParagraphElement')){
                    console.log();
                    ingredient = $($(e.target).siblings()[1]).text();
                }
                else if(e.target.toString().includes('HTMLDivElement')){
                    console.log();
                    ingredient = $($(e.target).children()[1]).text();
                }
                else{
                    ingredient = $($(e.target).siblings()[0]).text();
                }
                this.displayIngredient(ingredient);
            });

        }
        else{
            $('#data').html('<h1>No meals found</h1>');
            $('#data').css('text-align', 'center');
        }
        }
        
        async fetchApi(api){
            const respone = await (await fetch(api)).json();
            return respone;
        }

        async displayIngredient(ingredient){
        const home = new Home(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    }
}