"use strict";

console.log("main.js TEST");

let dataRequest = new XMLHttpRequest();
dataRequest.open("GET", "js/products.json");
dataRequest.send();
dataRequest.addEventListener("load", dataLoad);
dataRequest.addEventListener("error", dataError);

function dataLoad(){
    console.log("Loading function!");
    let productData = JSON.parse(event.target.responseText);
    console.log("RAW productData", productData);
    showProduct(productData.products);
}

function showProduct(productInput){
    let productOutput = document.getElementById("output");
    let productStuff = '';
    for (let item in productInput){
        let productItem = productInput[item];
        console.log(productInput[item]);
        productStuff += `<div>`;
        productStuff += `<div>${productItem.name}</div>`;
        productStuff += `<div class="CID-${productItem.category_id}">${productItem.price}</div>`
        productStuff += `</div>`;
    }
    productOutput.innerHTML = productStuff;
}

function dataError(){
    console.log("Error function!");
}

let data2Request = new XMLHttpRequest();
data2Request.open("GET", "js/categories.json");
data2Request.send();


//==============
//== NON JSON ==
//==============
let selection = document.getElementById("selection");
selection.addEventListener("change", testout);
let testingDIV = document.getElementById("testout");

function testout(){
    if(selection.value == "summer"){
        testingDIV.innerHTML = "";
    }
    if(selection.value == "winter"){
        testingDIV.innerHTML = "WINTER BAH";
    }
    if(selection.value == "autumn"){
        testingDIV.innerHTML = "AUTUMN BAH";
    }
    if(selection.value == "spring"){
        testingDIV.innerHTML = "SPRING BAH";
    }
}