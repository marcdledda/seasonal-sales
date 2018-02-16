"use strict";

console.log("main.js TEST");

//=====================
//=== JSON PRODUCTS ===
//=====================
let blah = "wut";
let dataRequest = new XMLHttpRequest();
dataRequest.open("GET", "js/products.json");
dataRequest.send();
dataRequest.addEventListener("load", dataLoad);
dataRequest.addEventListener("error", dataError);

function dataLoad(){
    console.log("Loading function!");
    productData = JSON.parse(event.target.responseText);
    // console.log("RAW productData", productData);
    showProduct(productData.products);
}

function showProduct(productInput){
    let productOutput = document.getElementById("output");
    let productStuff = '';
    for (let item in productInput){
        let productItem = productInput[item];
        // console.log(productInput[item]);
        productStuff += `<div>`;
        productStuff += `<div>${productItem.name} <div>${productItem.price}</div></div>`;
        productStuff += `</div>`;
    }
    productOutput.innerHTML = productStuff;
}

function dataError(){
    console.log("Error function!");
}

let productData = [];

//=======================
//=== JSON CATEGORIES ===
//=======================
let data2Request = new XMLHttpRequest();
data2Request.open("GET", "js/categories.json");
data2Request.send();
data2Request.addEventListener("load", data2Load);
data2Request.addEventListener("error", data2Error);

function data2Load(){
    console.log("Loading function 2!");
    categoryData = JSON.parse(event.target.responseText);
    // console.log("RAW categoryData", categoryData)
    // formatData(categoryData.category);
}

function data2Error(){
    console.log("Error function 2!");
}

// function formatData(change) {
//     categoryData = change;
// }

let categoryData = [];

//==============
//== NON JSON ==
//==============
let selection = document.getElementById("selection");
selection.addEventListener("change", testout);
let testingDIV = document.getElementById("testout");

function testout(){
    if(selection.value == "summer"){
        testingDIV.innerHTML = "";
        showProduct(productData.products);
    }

    if(selection.value == "winter"){
        testingDIV.innerHTML = "WINTER BAH";
        winterShowProduct(productData.products);
    }

    if(selection.value == "autumn"){
        testingDIV.innerHTML = "AUTUMN BAH";
        autumnShowProduct(productData.products);
    }

    if(selection.value == "spring"){
        testingDIV.innerHTML = "SPRING BAH";
        springShowProduct(productData.products);
    }
}

function winterShowProduct(productInput){
    let productOutput = document.getElementById("output");
    productOutput.innerHTML = "";
    let productStuff = '';
    for (let item in productInput){
        let productItem = productInput[item];
        console.log(productInput[item]);
        if(productItem.category_id == 1){
            let productDeci = ((1 - categoryData.categories["0"].discount)* productItem.price);
            let productPrice = productDeci.toFixed(2);
            // console.log("this is 1");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productPrice}</div></div>`;
            productStuff += `</div>`;
        } else {
            // console.log("this is not");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productItem.price}</div></div>`;
            productStuff += `</div>`;
        }
    }
    productOutput.innerHTML = productStuff;
}

function autumnShowProduct(productInput){
    let productOutput = document.getElementById("output");
    productOutput.innerHTML = "";
    let productStuff = '';
    for (let item in productInput){
        let productItem = productInput[item];
        console.log(productInput[item]);
        if(productItem.category_id == 2){
            let productDeci = ((1 - categoryData.categories["1"].discount)* productItem.price);
            let productPrice = productDeci.toFixed(2);
            // console.log("this is 2");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productPrice}</div></div>`;
            productStuff += `</div>`;
        } else {
            // console.log("this is not");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productItem.price}</div></div>`;
            productStuff += `</div>`;
        }
    }
    productOutput.innerHTML = productStuff;
}

function springShowProduct(productInput){
    let productOutput = document.getElementById("output");
    productOutput.innerHTML = "";
    let productStuff = '';
    for (let item in productInput){
        let productItem = productInput[item];
        console.log(productInput[item]);
        if(productItem.category_id == 3){
            let productDeci = ((1 - categoryData.categories["2"].discount)* productItem.price);
            let productPrice = productDeci.toFixed(2);
            // console.log("this is 3");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productPrice}</div></div>`;
            productStuff += `</div>`;
        } else {
            // console.log("this is not");
            productStuff += `<div>`;
            productStuff += `<div>${productItem.name} <div>${productItem.price}</div></div>`;
            productStuff += `</div>`;
        }
    }
    productOutput.innerHTML = productStuff;
}