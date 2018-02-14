"use strict";

console.log("main.js TEST");

let data_call = document.getElementById("btn-product");
data_call.addEventListener("click", getProducts);

function getProducts() {
    console.log("EZ Function");

    let productXHR = new XMLHttpRequest();

    productXHR.addEventListener("load", function(){
        console.log("It loaded");
        let productData = JSON.parse(this.responseText);
        console.log("Product Raw:", productData);
        console.log(".products:", productData.products);
        let productProduct = productData.products;
        
    });

    productXHR.addEventListener("error", function(){
        console.log("It did not load");
    });

    productXHR.open("GET", "js/products.json");
    productXHR.send();
}