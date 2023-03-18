import Home from './home.module.js'
export default class Area{
    constructor(){
        $('.loading-screen').fadeIn(0);
        this.display(); 
        $(this).ready(()=> {
            $('.loading-screen').fadeOut(500);
        }); 
        this.display()
    }
    async display(){
        const api = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
        const data =   await this.fetchApi(api);
        const areas = data.meals;
        let cartona = ``;
        for(let i=0;i<areas.length;i++){
            cartona+=`<div class="col-md-3">
            <div class="rounded-2 text-center cursor-pointer area">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${areas[i].strArea}</h3>
            </div>
    </div>`;
        }
        $('#data').html(cartona);
        $('.area').click((e)=>{
            let area;
            if (e.target.toString().includes('HTMLHeadingElement')){
                area = $(e.target).text();
            }
            else if(e.target.toString().includes('HTMLElement')){
                area = $($(e.target).siblings()[0]).text();
            }
            else{
                area = $($(e.target).children()[1]).text();
            }
            //console.log(area);
            this.displayArea(area);
        });
    }

    async displayArea(area){
        //console.log(area);
        const home = new Home(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    }

    async fetchApi(api){
        const respone = await (await fetch(api)).json();
        return respone;
    }
}