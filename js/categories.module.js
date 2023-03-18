export default class Categories{
    constructor(){
        $('#data').empty();
        this.getCategories();
        
    }
    async getCategories(){
        const api = 'www.themealdb.com/api/json/v1/1/categories.php';
        const categories = await this.fetchApi(api);
        console.log(categories.categories)
    }
    async fetchApi(api){
        const respone = await (await fetch(api)).json();
        return respone;
    }
}