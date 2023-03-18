import Home from './home.module.js';
import Search from './search.module.js';
import Categories from './categories.module.js';
import Area from './area.module.js';
import Ingredients from './Ingredients.module.js';
import Contact from './contact.module.js';
export default class SideNav{
    constructor(){
        const home = new Home('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        $('.side-nav-menu').css('left', `-${$('.side-nav-menu').innerWidth()}`);
        $('.sideNav ').click(this.toggleSideNave);
        $('.side-nav-menu ul li ').click(this.toggleSideNave);
        $($('.logo')[0]).click(()=>{
            $('#search').addClass('d-none');
            if($('.side-nav-menu').css('left') == '0px'){
                this.toggleSideNave();
            }
            
            const home = new Home('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        });
        $($('.side-nav-menu ul li')[0]).click(()=>{
            $('#search').addClass('d-none');
            $('#details').addClass('d-none');
            const search = new Search();
        });
        $($('.side-nav-menu ul li')[1]).click(()=>{
            $('#search').addClass('d-none');
            $('#details').addClass('d-none');
            const categories = new Categories();
        });
        $($('.side-nav-menu ul li')[2]).click(()=>{
            $('#search').addClass('d-none');
            $('#details').addClass('d-none');
            const area = new Area();
        });
        $($('.side-nav-menu ul li')[3]).click(()=>{
            $('#search').addClass('d-none');
            $('#details').addClass('d-none');
            const ingredients = new Ingredients();
        });
        $($('.side-nav-menu ul li')[4]).click(()=>{
            $('#search').addClass('d-none');
            $('#details').addClass('d-none');
            const contact = new Contact();
        });
    }

    toggleSideNave(){
        if($('.side-nav-menu').css('left') == '0px'){
            $('.side-nav-menu').css('left', `-256.562px`);
            $('.sideNav').removeClass('fa-x'); 
        }
        else{
            $('.side-nav-menu').css('left', '0');
            $('.sideNav').addClass('fa-x'); 
        }
    }

    search(){
        const search = new Search();
    }
}