const product = document.querySelector(".p");
const company = document.querySelector(".cy");
const connect = document.querySelector(".ct");

const p_menu = document.querySelector(".p-menu");
const cy_menu = document.querySelector(".cy-menu");
const ct_menu = document.querySelector(".ct-menu");

const p_arrow = document.querySelector(".p-arrow");
const cy_arrow = document.querySelector(".cy-arrow");
const ct_arrow = document.querySelector(".ct-arrow");

const show = document.querySelector(".btn");
const menu = document.querySelector(".menu");

let count_1 = 0;
product.addEventListener('click', function onClick(e) {
    count_1 ++;
    if (count_1 %2 == 0) {
        p_menu.style.display = "none";
        p_arrow.style.transform = "scaleY(1)";
    }else {
        p_menu.style.display = "block";
        p_arrow.style.transform = "scaleY(-1)";
    } 
})

let count_2 = 0;
company.addEventListener('click', function onClick(e) {
    count_2 ++;
    if (count_2 %2 == 0) {
        cy_menu.style.display = "none";
        cy_arrow.style.transform = "scaleY(1)";
    }else {
        cy_menu.style.display = "block";
        cy_arrow.style.transform = "scaleY(-1)";
    } 
})

let count_3 = 0;
connect.addEventListener('click', function onClick(e) {
    count_3 ++;
    if (count_3 %2 == 0) {
        ct_menu.style.display = "none";
        ct_arrow.style.transform = "scaleY(1)";
    }else {
        ct_menu.style.display = "block";
        ct_arrow.style.transform = "scaleY(-1)";
    } 
})


    let count_4 = 0;
    show.addEventListener('click', function onClick(e) {
        count_4 ++;
        if (count_4 %2 == 0) {
            menu.classList.remove("show");
           show.src = "images/icon-hamburger.svg";
        }else {
            menu.classList.add("show");
           show.src = "images/icon-close.svg";
        } 
    })


         