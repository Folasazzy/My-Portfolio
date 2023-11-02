const menu = document.querySelector('.b');

function showMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');

    }
}