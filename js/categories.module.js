import Home from './home.module.js'
export default class Categories{
    constructor(){
        $('.loading-screen').fadeIn(0);
        $(this).ready(()=> {
            $('.loading-screen').fadeOut(500);
        }); 
        this.display();
    }
    async display(){
        const api = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        const data =   await this.fetchApi(api);
        const categories = data.categories;
        let cartona = ``;
        for(let i=0;i<categories.length;i++){
            cartona+=`<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src=${categories[i].strCategoryThumb}>
                <div class="meal-layer position-absolute text-center text-black p-2">
                    <h3>${categories[i].strCategory}</h3>
                    <p>${categories[i].strCategoryDescription}</p>
                </div>
            </div>
    </div>`;
        }
        $('#data').html(cartona);
        $('.meal').click((e)=>{
            let category;

            if (e.target.toString().includes('HTMLHeadingElement')){
                category = $(e.target).text();
            }
            else if(e.target.toString().includes('HTMLParagraphElement')){
                category = $($(e.target).siblings()[0]).text();
            }
            else{
                category = $($(e.target).children()[0]).text().split(' ')[0];
            }
            this.displayCategory(category);
        });
    }

    async displayCategory(category){
        //console.log(category);
        const home = new Home(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    }

    async fetchApi(api){
        const respone = await (await fetch(api)).json();
        return respone;
    }
}