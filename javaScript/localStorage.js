// check local storage empty?. If so create key
// window.localStorage.setItem('StumpJumperPro29', JSON.stringify(StumpJumperPro29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));

// Set To LocalStorage
for (let i = 0; i < arrBikesInfo.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        localStorage.setItem(bikesPagesOnly[i], JSON.stringify(arrBikesInfo[i]));
    }
}
var productsCounter = [];
// set counter
if (localStorage.getItem("productsCounter") === null) {
    localStorage.setItem("productsCounter", 1);
}
// Thumb Up
$('.rating-icon_thumbsUp').click(function () {
    let currentUpCount = parseInt(currentItem.thumbsUp);
    currentItem.thumbsUp = ++currentUpCount;
    currentUpCount = increase("Up", currentUpCount);
});

// Thumb Up
$('.rating-icon_thumbsDown').click(function () {
    let currentDownCount = parseInt(currentItem.thumbsDown);
    currentItem.thumbsDown = ++currentDownCount;
    currentDownCount = increase("Down", currentDownCount);
});

function increase(e, o) {
    $('.thumbs' + e + '-rating-count').text(o);
    localStorage.setItem(page, JSON.stringify(currentItem));
    $('.thumbs' + e + '-rating-count').addClass('thumbs' + e + '-active');
}

for (let i = 0; i < bikesPagesOnly.length; i++) {
    var currentPageName = bikesPagesOnly[i];
    var fullPageName = currentPageName.concat('.html');

    if (window.location.href.indexOf(fullPageName) > -1) {
        var pageName = fullPageName;
        var page = currentPageName;
        var currentItem = JSON.parse(localStorage.getItem(currentPageName));
        $('.thumbsUp-rating-count').text(currentItem.thumbsUp);
        $('.thumbsDown-rating-count').text(currentItem.thumbsDown);
        if (currentItem.thumbsUp > 0) {
            $(".thumbsUp-rating-count").addClass("thumbsUp-active");
        }
        if (currentItem.thumbsDown > 0) {
            $(".thumbsDown-rating-count").addClass("thumbsDown-active");
        }

        // var upClicked = 15;
        // currentItem.thumbsUp = upClicked;
        // console.log(currentItem);
        // $('.thumbsUp-rating-count').text(currentItem.thumbsUp);
    }
}



// Selectiong button to add Item in LocalStorage then to Card

$('.bike-cart_add-to-cart').click(function () {
    var itemWrap = $('.bike-cart_wrap');

    var cartItemName = itemWrap.find('.bike-name').text();
    var cartItemSize = itemWrap.find('.bike-size :selected').val();
    var cartItemQty = itemWrap.find('.bike-qty :selected').val();

    var itemName = cartItemName.replace(" ", "");

    for (i = 0; i < 5; i++) {
        itemName = itemName.replace(" ", "");
    }
    var currentBike = JSON.parse(localStorage.getItem(itemName));
    let productsCounter = Number(localStorage.productsCounter);
    // itemName = itemName.concat('.html');
    currentBike.size = cartItemSize;
    currentBike.qty = cartItemQty;

    localStorage.setItem(itemName, JSON.stringify(currentBike));
    // console.log(itemName);

    var cartHolder = [];
    cartHolder.push(currentBike);
    console.log(currentBike);

    localStorage.setItem('cartHolder' + productsCounter, JSON.stringify(cartHolder));
    // productsCounter++;
    localStorage.setItem("productsCounter", ++productsCounter);
    // var a = JSON.parse(localStorage.getItem(cartHolder));
    // cartHolder[0];
    // console.log(cartHolder);
    updateIconCounter(productsCounter);
});

function updateIconCounter(p) {
    var ProdCountCartIcon = document.querySelector('.nav-cart');
    var iconCounter = p - 1;
    ProdCountCartIcon.innerHTML = `<p class="cartIconProdCount">${iconCounter}</p>`;
}

function onLoad() {
    let productsCounter = localStorage.productsCounter;
    var ProdCountCartIcon = document.querySelector('.nav-cart');
    var iconCounter = productsCounter - 1;
    ProdCountCartIcon.innerHTML = `<p class="cartIconProdCount">${iconCounter}</p>`;
}
// show added items
// check Cart and add items

// var getObject = JSON.parse(localStorage.getItem('cartHolder'));
// console.log(getObject);

// document.addEventListener('DOMContentLoaded', function(){

// });
function showCart() {


    let productsCounter = localStorage.productsCounter;

    if (JSON.parse(localStorage.getItem('cartHolder1')) == null) {
        var cartTable = document.querySelector('.bike-cart-table');
        var cartWrap = document.querySelector('.cart-table-wrap');
        // console.log(getObject);

        var emptyCart = document.createElement("div");
        emptyCart.className = "cart-content-wrap-empty";
        emptyCart.innerHTML = `<p class="cart-content_title bolder">is Empty</p>
        <p class="cart-content_text">Nothin' to see here.</p>
        <p class="cart-content_text">Check out our bikes.</p>
        <a class="cart-header_contShopping" href="../shop/bikes.html">Continue Shopping</a>`;
        cartTable.insertBefore(emptyCart, cartWrap);
        $('.cart-table-wrap').hide();

        // var content_title = document.createElement("p");
        // content_title.className = "cart-content_title text-align-last";
        // content_title.innerHTML = `<div class = "bolder">is Empty</div>`;

        // var content_text = document.createElement("p");
        // content_text.className = "cart-content_text text-align-last";
        // content_text.innerHTML = `Nothin ' to see here.`;

        // var content_text1 = document.createElement("p");
        // content_text1.className = "cart-content_text text-align-last";
        // content_text1.innerHTML = `Check out our bikes.`;

        // var header_contShopping = document.createElement("a");
        // header_contShopping.className = "cart-header_contShopping text-align-last";
        // header_contShopping.href = "../shop/bikes.html";
        // header_contShopping.innerHTML = "Continue Shopping";

        // Insert them
        // cart.insertBefore(content_title, totalContainer);
        // cart.insertBefore(content_text, totalContainer);
        // cart.insertBefore(content_text1, totalContainer);
        // cart.insertBefore(header_contShopping, totalContainer);


    } else {
        // var getObject = JSON.parse(localStorage.getItem('cartHolder1'));
        for (let j = 1; j < productsCounter; j++) {
            let key = "";
            key = "cartHolder" + j;
            console.log(key);


            var getObject = JSON.parse(localStorage.getItem(key));
            console.log(getObject);
            key.replace('cartHolder', 'cartHolder' + j)
            $('.cart-content-wrap-empty').hide();
            for (let i = 0; i < 1; i++) {
                var cart = document.querySelector('.cart-section-title-table');
                var totalContainer = document.querySelector('.totalContainer');




                var cartProducts = document.createElement("tr");
                cartProducts.className = "cart-section-category";
                cartProducts.innerHTML = `<td class="cart-section-category-title partNum addedItem">${getObject[i].partNum}</td>
            <td class="cart-section-category-title partName addedItem"><a class="whyNot" href="${getObject[i].html}">${getObject[i].name}</a></td>
            <td class="cart-section-category-title partSize addedItem uppercase align-cent">${getObject[i].size}</td>
            <td class="cart-section-category-title partColor addedItem align-cent"><img src="${getObject[i].color}" class="addedColor"></td>
            <td class="cart-section-category-title partQty addedItem uppercase align-cent">${getObject[i].qty}</td>
            <td class="cart-section-category-title partPrice addedItem">$${((getObject[i].price)/1000).toFixed(3)}.000</td>
            <td class="cart-section-category-title partDelBtn addedItem"><input
                    type="button" class="deleteItem deleteItem${j}"></input></td>`;
                cart.insertBefore(cartProducts, totalContainer);
            }
        }
    }
    // Delete Item From Cart
    $('.partDelBtn').click(function () {

        let name = $(this).parent().find('.whyNot').attr("href").replace('.html', '');
        $(this).parent().remove();
        getObject[0] = "";
        console.log(name);

        var index = getObject.indexOf(name);
        console.log(index);

        if (index > -1) {
            getObject.splice(index, 1);
            localStorage.setItem(getObject, JSON.stringify(getObject));
            console.log(getObject);
        }


    });
}

// if (getObject != null) {
//     const emptyCart = document.createElement("tr");

//     emptyCart.classList.add("cart-section-category");
//     emptyCart.innerHTML = `<p class = "cart-content_title"> Your Shopping Cart is <div class = "bolder">is Empty</div></p>
//         <p class = "cart-content_text" > Nothin ' to see here.</p >
//         <p class = "cart-content_text" > Check out our bikes. </p>
//         <a class = "cart-header_contShopping" href = "../shop/bikes.html"> Continue Shopping </a>`;

//     const cart = $('.cart-section-title-table');
//     const total = $('.total-container');
//     $('.cart-section-title-table').insertBefore("emptyCart", "total-container");

// } else {

// }