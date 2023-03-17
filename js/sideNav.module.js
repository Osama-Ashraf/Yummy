import {Home} from './home.module.js'
export class SideNav{
    constructor(){
        const home = new Home();
        $('.side-nav-menu').css('left', `-${$('.side-nav-menu').innerWidth()}`);
        $('.side-nav-menu').click(this.toggleSideNave)
    }

    toggleSideNave(){
        if($('.side-nav-menu').css('left') == '0px'){
            console.log($('.side-nav-menu').width());
            $('.side-nav-menu').css('left', `-${$('.side-nav-menu').width()}px`);
            $('.sideNav').removeClass('fa-x'); 
        }
        else{
            $('.side-nav-menu').css('left', '0');
            $('.sideNav').addClass('fa-x'); 
        }
    }
}