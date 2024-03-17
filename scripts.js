var user = 'Macalah';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Welcome!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

function lethal(){
var lethalPrice = 9.99,
    lSaleDiscount = .20,
    LSalePrice = lethalPrice - (lethalPrice * lSaleDiscount),
    lethalPriceEl = document.getElementById('l-price'),
    lSalePriceEl = document.getElementById('l-sale-price');

lethalPriceEl.textContent = lethalPrice.toFixed(2);
lSalePriceEl.textContent = LSalePrice.toFixed(2);
}

function fnaf(){
var fnafPrice = 10,
    fSaleDiscount = .50,
    FSalePrice = fnafPrice - (fnafPrice * fSaleDiscount),
    fnafPriceEl = document.getElementById('f-price'),
    fSalePriceEl = document.getElementById('f-sale-price');

fnafPriceEl.textContent = fnafPrice.toFixed(2);
fSalePriceEl.textContent = FSalePrice.toFixed(2);
}

function bg(){
var bgPrice = 20,
    bSaleDiscount = .10,
    BSalePrice = bgPrice - (bgPrice * bSaleDiscount),
    bgPriceEl = document.getElementById('b-price'),
    bSalePriceEl = document.getElementById('b-sale-price');

bgPriceEl.textContent = bgPrice.toFixed(2);
bSalePriceEl.textContent = BSalePrice.toFixed(2);
}

function myFunction() {
        var x = document.getElementById("myTopNav");
        if (x.className === "topNav") {
            x.className += " responsive";
        } else {
            x.className = "topNav"
        }
    }