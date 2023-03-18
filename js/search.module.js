import Details from "./details.module.js";
import Home from "./home.module.js";
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
        const home = new Home(`https://www.themealdb.com/api/json/v1/1/search.php?${mode}=${term}`);
        
    }

    async fetchApi(api){
        const respone = await (await fetch(api)).json();
        return respone;
    }


}