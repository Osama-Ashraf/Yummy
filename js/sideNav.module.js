import Home from './home.module.js'
import Search from './search.module.js';
import Categories from './categories.module.js';
import Area from './area.module.js';
export default class SideNav{
    constructor(){
        const home = new Home();
        $('.side-nav-menu').css('left', `-${$('.side-nav-menu').innerWidth()}`);
        $('.sideNav ').click(this.toggleSideNave);
        $('.side-nav-menu ul li ').click(this.toggleSideNave);
        $($('.logo')[0]).click(()=>{
            $('#search').addClass('d-none');
            if($('.side-nav-menu').css('left') == '0px'){
                this.toggleSideNave();
            }
            
            const home = new Home();
        });
        $($('.side-nav-menu ul li')[0]).click(()=>{
            $('#search').addClass('d-none');
            const search = new Search();
        });
        $($('.side-nav-menu ul li')[1]).click(()=>{
            $('#search').addClass('d-none');
            const categories = new Categories();
        });
        $($('.side-nav-menu ul li')[2]).click(()=>{
            $('#search').addClass('d-none');
            const area = new Area();
        });
    }
//Search  Categories  Area  Ingredients  Contact Us

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