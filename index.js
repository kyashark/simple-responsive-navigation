

function darkmodeFunction(){
    const item=document.getElementById("item");
    const nav=document.getElementById("nav");
    const navmenu=document.getElementById("nav-menu");

    item.classList.toggle("bx-sun");
    nav.classList.toggle("dark-mode");
    navmenu.classList.toggle("dark-mode");


}


const menuItem=document.getElementById("menu-item");

menuItem.addEventListener("click",function(){
    document.getElementById("nav-menu").classList.toggle("show");

    document.querySelectorAll("span").forEach((bar, index) => {
        bar.classList.toggle('change');
    })


})

