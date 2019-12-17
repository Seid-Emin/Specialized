// check local storage empty?. If so create key
// window.localStorage.setItem('StumpJumperPro29', JSON.stringify(StumpJumperPro29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));

// Set To LocalStorage
function onLoad() {
    if (localStorage.getItem("addedItemsCounter") === null) {
        localStorage.setItem("addedItemsCounter", 0);
    }
    if (localStorage.getItem("productsCounter") === null) {
        localStorage.setItem("productsCounter", 1);
    }
    var addedItemsCounter = Number(localStorage.addedItemsCounter);
    var productsCounter = Number(localStorage.productsCounter);
    var ProdCountCartIcon = document.querySelector('.nav-cart');
    ProdCountCartIcon.innerHTML = `<p class="cartIconProdCount">${addedItemsCounter}</p>`;
}
var addedItemsCounter = Number(localStorage.addedItemsCounter);
var productsCounter = Number(localStorage.productsCounter);

for (var i = 0; i < arrBikesInfo.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        localStorage.setItem(bikesPagesOnly[i], JSON.stringify(arrBikesInfo[i]));
    }
}

// set counter

// Thumb Up
$('.rating-icon_thumbsUp').click(function () {
    var currentUpCount = parseInt(currentItem.thumbsUp);
    currentItem.thumbsUp = ++currentUpCount;
    currentUpCount = increase("Up", currentUpCount);
});

// Thumb Up
$('.rating-icon_thumbsDown').click(function () {
    var currentDownCount = parseInt(currentItem.thumbsDown);
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
    // document.querySelector("")
    var cartItemQty = itemWrap.find('.bike-qty_option').val();
    var itemName = cartItemName.replace(" ", ""); // TODO
    for (i = 0; i < 5; i++) {
        itemName = itemName.replace(" ", "");
    }
    var currentBike = JSON.parse(localStorage.getItem(itemName));
    if (addedItemsCounter > 0) {
        for (let i = 1; i < productsCounter; i++) {
            let key = "";
            key = "cartHolder" + i;
            var getObject = JSON.parse(localStorage.getItem(key));
            var currentName = getObject[0].name;
            var currentSize = getObject[0].size;
            if (currentName == cartItemName) {
                if (currentSize == cartItemSize) {
                    currentBike.qty = cartItemQty;
                } else {
                    currentBike.size = cartItemSize;
                    currentBike.qty = cartItemQty;
                    productsCounter++;
                }
            } else {
                currentBike.size = cartItemSize;
                currentBike.qty = cartItemQty;
                productsCounter++;
            }
        }
    }
    localStorage.setItem(itemName, JSON.stringify(currentBike));
    var cartHolder = [];
    cartHolder.push(currentBike);
    localStorage.setItem('cartHolder' + productsCounter, JSON.stringify(cartHolder));
    productsCounter++;
    var addedItemsCounter = 0;
    for (let i = 1; i < productsCounter; i++) {
        let key = "";
        key = "cartHolder" + i;
        newGetObject = JSON.parse(localStorage.getItem(key));
        currentQty = newGetObject[0].qty;
        addedItemsCounter += Number(currentQty);
        console.log(addedItemsCounter);

    }
    localStorage.setItem("productsCounter", Number(productsCounter));
    localStorage.setItem("addedItemsCounter", Number(addedItemsCounter));
    updateIconCounter(addedItemsCounter);
});

// function updateAddedItemsCounter() {

// }

function updateIconCounter(p) {
    var ProdCountCartIcon = document.querySelector('.nav-cart');
    ProdCountCartIcon.innerHTML = `<p class="cartIconProdCount">${addedItemsCounter}</p>`;
}


// show added items
// check Cart and add items

// var getObject = JSON.parse(localStorage.getItem('cartHolder'));
// console.log(getObject);

// document.addEventListener('DOMContentLoaded', function(){

// });
function showCart() {

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
        for (var j = 1; j <= productsCounter; j++) {
            var key = "";
            key = "cartHolder" + j;
            // console.log(key);


            var getObject = JSON.parse(localStorage.getItem(key));
            // console.log(getObject);
            key.replace('cartHolder', 'cartHolder' + j);
            $('.cart-content-wrap-empty').hide();
            for (var i = 0; i < 1; i++) {
                var cart = document.querySelector('.cart-section-title-table');
                var totalContainer = document.querySelector('.totalContainer');




                var cartProducts = document.createElement("tr");
                cartProducts.className = "cart-section-category";
                cartProducts.innerHTML = `<td class="cart-section-category-title partNum addedItem">${getObject[i].partNum}</td>
            <td class="cart-section-category-title partName addedItem"><a class="whyNot" href="${getObject[i].html}">${getObject[i].name}</a></td>
            <td class="cart-section-category-title partSize addedItem uppercase align-cent">${getObject[i].size}</td>
            <td class="cart-section-category-title partColor addedItem align-cent"><img src="${getObject[i].color}" class="addedColor"></td>
            <td class="cart-section-category-title partQty addedItem uppercase align-cent"> <input type="text" value="${getObject[i].qty}" class="bike-qty_option"></td>
            <td class="cart-section-category-title partPrice addedItem">$${((getObject[i].price)/1000).toFixed(3)}.000</td>
            <td class="cart-section-category-title-btn partDelBtn addedItem"><input
                    type="button" class="deleteItem deleteItem${j}"></input></td>`;
                cart.insertBefore(cartProducts, totalContainer);
            }
        }
    }
    // Delete Item From Cart
    $('.partDelBtn').click(function () {

        var name = $(this).parent().find('.whyNot').attr("href").replace('.html', '');
        $(this).parent().remove();
        getObject[0] = "";
        // console.log(name);

        var index = getObject.indexOf(name);
        // console.log(index);

        if (index > -1) {
            getObject.splice(index, 1);
            localStorage.setItem(getObject, JSON.stringify(getObject));
            // console.log(getObject);
        }


    });
    // Change Product Qtity
    $('.bike-qty_option').keyup(function () {
        var qtyName = $(this).parent().parent().find('.whyNot').text();
        var currentQty = $(this).val();
        var currentSize = $(this).parent().parent().find('.partSize').text();
        // console.log(currentQty);
        for (var i = 1; i < productsCounter; i++) {
            var key = "";
            key = "cartHolder" + i;

            var getObjectChange = JSON.parse(localStorage.getItem(key));
            let objName = getObjectChange[0].name;
            let objSize = getObjectChange[0].size;
            if (qtyName == objName && currentSize == objSize) {
                getObjectChange[0].qty = currentQty;
                localStorage.setItem(key, JSON.stringify(getObjectChange));
            }
            console.log(currentSize);

        }
        // console.log(asdasd);
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











var isFound = false;

if (addedItemsCounter > 0) {
    while (isFound == false) {
        for (var i = 1; i < productsCounter; i++) {
            var key = "";
            key = "cartHolder" + i;
            var curretnAddedHolderKey = "cartHolder" + productsCounter;
            var getObjectChange = JSON.parse(localStorage.getItem(key));
            var objName = getObjectChange[0].name;
            var objSize = getObjectChange[0].size;
            // var objQty = getObjectChange[0].qty;

            var currentAddedHolder = JSON.parse(localStorage.getItem(curretnAddedHolderKey));
            var currentAddedName = currentAddedHolder[0].name;
            var currentAddedSize = currentAddedHolder[0].size;
            var currentAddedQty = currentAddedHolder[0].qty;

            var compare1 = currentAddedName.localeCompare(objName);
            var compare2 = currentAddedSize.localeCompare(objSize);
            if (compare1 === 0 && compare2 === 0) {
                getObjectChange[0].qty = currentAddedQty;
                localStorage.setItem('cartHolder' + i, JSON.stringify(getObjectChange));
                localStorage.removeItem(curretnAddedHolderKey);
                productsCounter--;
                isFound = true;
            }
        }
    }
}

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", []);
}
var products = JSON.parse(localStorage.getItem(products));
products.push(currentBike);
console.log(currentBike);

function removeDublicats() {
    for (var i = 1; i < productsCounter - 1; i++) {
        var key = "";
        key = "cartHolder" + i;
        var firstObj = JSON.parse(localStorage.getItem(key));
        var firstObjName = firstObj[0].name;
        var firstObjSize = firstObj[0].size;
        for (var j = 2; j < productsCounter; j++) {
            var nextKey = "";
            nextKey = "cartHolder" + j;
            var secondObj = JSON.parse(localStorage.getItem(nextKey));
            var secondObjName = secondObj[0].name;
            var secondObjSize = secondObj[0].size;

            var compareName = firstObjName.localeCompare(secondObjName);
            var compareSize = firstObjSize.localeCompare(secondObjSize);
            if (compareName === 0 && compareSize === 0) {

                localStorage.setItem(key, JSON.stringify(secondObj));
                localStorage.removeItem(nextKey);
                productsCounter -= 1;
                localStorage.setItem("productsCounter", productsCounter);
                updateIconCounter();
                updateTotalAfterAdding()
            }
        }
    }
}


$('.partDelBtn').click(function () {

    var classNameDelBtn = $(this).find('.deleteItem').attr('id');
    var name = $(this).parent().find('.whyNot').attr("href").replace('.html', '');
    $(this).parent().remove();
    getObject[0] = "";
    var index = getObject.indexOf(name);
    if (index > -1) {
        getObject.splice(index, 1);
        localStorage.setItem(getObject, JSON.stringify(getObject));
    }

    for (var i = 0; i < productsCounter; i++) {
        var key = "";
        key = "cartHolder" + i;
        var firstObj = JSON.parse(localStorage.getItem(key));
        if (firstObj == null) {
            continue;
        } else {
            var nextKey = "";
            nextKey = "cartHolder" + `${i+1}`;
            var secondObj = JSON.parse(localStorage.getItem(nextKey));
            localStorage.setItem(key, JSON.stringify(secondObj));
            localStorage.removeItem(nextKey);
        }
    }
    productsCounter -= 1;
    localStorage.setItem("productsCounter", productsCounter);
    updateIconCounter();
    updateTotalAfterAdding();

});



function cartIsEmpty() {
    if (productsCounter == 0) {
        var cartTable = document.querySelector('.bike-cart-table');
        var cartWrap = document.querySelector('.cart-table-wrap');
        var emptyCart = document.createElement("div");
        emptyCart.className = "cart-content-wrap-empty";
        emptyCart.innerHTML = `<p class="cart-content_title bolder">is Empty</p>
 <p class="cart-content_text">Nothin' to see here.</p>
 <p class="cart-content_text">Check out our bikes.</p>
 <a class="cart-header_contShopping" href="../shop/bikes.html">Continue Shopping</a>`;
        cartTable.insertBefore(emptyCart, cartWrap);
        $('.cart-table-wrap').hide();
    }
}

function createTable() {
    for (var j = 0; j < productsCounter; j++) {
        var key = "";
        key = "cartHolder" + j;
        var getObject = JSON.parse(localStorage.getItem(key));
        key.replace('cartHolder', 'cartHolder' + j)
        $('.cart-content-wrap-empty').hide();
        for (let i = 0; i < 1; i++) {
            var cart = document.querySelector('.cart-section-title-table');
            var totalContainer = document.querySelector('.totalContainer');
            var cartProducts = document.createElement("tr");
            cartProducts.className = "cart-section-category tr_generated";
            cartProducts.innerHTML = `<td class="cart-section-category-title partNum addedItem">${getObject[i].partNum}</td>
<td class="cart-section-category-title partName addedItem"><a class="whyNot" href="${getObject[i].html}">${getObject[i].name}</a></td>
<td class="cart-section-category-title partSize addedItem uppercase align-cent">${getObject[i].size}</td>
<td class="cart-section-category-title partColor addedItem align-cent"><img src="${getObject[i].color}" class="addedColor"></td>
<td class="cart-section-category-title partQty addedItem uppercase align-cent"> <input type="text" value="${getObject[i].qty}" class="bike-qty_option"></td>
<td class="cart-section-category-title partPrice addedItem">$${((getObject[i].total)/1000).toFixed(3)}.000</td>
<td class="cart-section-category-title-btn partDelBtn addedItem"><input
    type="button" class="deleteItem cartHolder${j}" id="cartHolder${j}""></input></td>`;
            cart.insertBefore(cartProducts, totalContainer);
        }
    }
}















// all workign without correct cart deleting


// Set To LocalStorage
function onLoad() {
    if (localStorage.getItem("addedItemsCounter") === null) {
        localStorage.setItem("addedItemsCounter", 0);
    } else {
        var addedItemsCounter = localStorage.addedItemsCounter;
        var ProdCountCartIcon = document.querySelector('.nav-cart');
        ProdCountCartIcon.innerHTML = `<p class="cartIconProdCount">${addedItemsCounter}</p>`;
    }
    if (localStorage.getItem("productsCounter") === null) {
        localStorage.setItem("productsCounter", 0);
    }
    if (localStorage.getItem("finalTotal") === null) {
        localStorage.setItem("finalTotal", 0);
    } else if (localStorage.getItem("finalTotal") != 0) {
        var finalTotal = localStorage.finalTotal;
        var totalCart = document.querySelector('.partTotalPrice');
        if (totalCart) {
            totalCart.innerHTML = `<p>$${(finalTotal/1000).toFixed(3)}.000</p>`;
        }
    }
    window.addedItemsCounter = localStorage.addedItemsCounter;
    window.productsCounter = localStorage.productsCounter;

    updateIconCounter();
}

for (var i = 0; i < arrBikesInfo.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        localStorage.setItem(bikesPagesOnly[i], JSON.stringify(arrBikesInfo[i]));
    }
}
// set counter

// Thumb Up
$('.rating-icon_thumbsUp').click(function () {
    var currentUpCount = parseInt(currentItem.thumbsUp);
    currentItem.thumbsUp = ++currentUpCount;
    currentUpCount = increase("Up", currentUpCount);
});

// Thumb Up
$('.rating-icon_thumbsDown').click(function () {
    var currentDownCount = parseInt(currentItem.thumbsDown);
    currentItem.thumbsDown = ++currentDownCount;
    currentDownCount = increase("Down", currentDownCount);
});
// Thumb Up increase
function increase(e, o) {
    $('.thumbs' + e + '-rating-count').text(o);
    localStorage.setItem(page, JSON.stringify(currentItem));
    $('.thumbs' + e + '-rating-count').addClass('thumbs' + e + '-active');
}
// add thimbs up to current page
for (var i = 0; i < bikesPagesOnly.length; i++) {
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

// Removes Dublicates while adding item to cardHolders
function removeDublicats() {
    for (var i = 0; i < productsCounter; i++) {
        var key = "";
        key = "cartHolder" + i;
        var firstObj = JSON.parse(localStorage.getItem(key));
        if (!firstObj) {
            continue;
        }
        var firstObjName = firstObj[0].name;
        var firstObjSize = firstObj[0].size;
        for (var j = i + 1; j < productsCounter; j++) {
            var nextKey = "";
            nextKey = "cartHolder" + j;
            var secondObj = JSON.parse(localStorage.getItem(nextKey));
            if (!secondObj) {
                continue;
            }
            var secondObjName = secondObj[0].name;
            var secondObjSize = secondObj[0].size;

            var compareName = firstObjName.localeCompare(secondObjName);
            var compareSize = firstObjSize.localeCompare(secondObjSize);
            if (compareName === 0 && compareSize === 0) {

                localStorage.setItem(key, JSON.stringify(secondObj));
                localStorage.removeItem(nextKey);
                productsCounter -= 1;
                localStorage.setItem("productsCounter", productsCounter);
                updateIconCounter();
                updateTotalAfterAdding();
            }
        }
    }
}

// Delete item from cart and storage


// Selectiong button to add Item in LocalStorage then to Card

$('.bike-cart_add-to-cart').click(function () {
    var itemWrap = $('.bike-cart_wrap');

    var cartItemName = itemWrap.find('.bike-name').text();
    var cartItemSize = itemWrap.find('.bike-size :selected').val();
    // document.querySelector("")
    var cartItemQty = itemWrap.find('.order-count_select').val();

    var itemName = cartItemName.replace(" ", "");

    for (i = 0; i < 5; i++) {
        itemName = itemName.replace(" ", "");
    }
    var currentBike = JSON.parse(localStorage.getItem(itemName));

    currentBike.size = cartItemSize;
    currentBike.qty = cartItemQty;
    var partItemPrice = currentBike.price;
    currentBike.total = Number(cartItemQty) * Number(partItemPrice);

    addedItemsCounter += Number(cartItemQty);
    localStorage.setItem(itemName, JSON.stringify(currentBike));

    var cartHolder = [];
    cartHolder.push(currentBike);

    localStorage.setItem('cartHolder' + productsCounter, JSON.stringify(cartHolder));
    productsCounter++;
    localStorage.setItem("productsCounter", productsCounter);
    localStorage.setItem("addedItemsCounter", Number(addedItemsCounter));

    removeDublicats();
    updateIconCounter(addedItemsCounter);

});

function updateIconCounter() {
    var cartItemsCounter = 0;
    for (var i = 0; i < productsCounter; i++) {
        var key = "";
        key = "cartHolder" + i;
        var getObjectChange = JSON.parse(localStorage.getItem(key));
        var objQty = getObjectChange[0].qty;
        cartItemsCounter += Number(objQty);
    }
    var prodCountCartIcon = document.querySelector('.nav-cart');
    prodCountCartIcon.innerHTML = `<p class="cartIconProdCount">${cartItemsCounter}</p>`;
    localStorage.setItem("addedItemsCounter", Number(cartItemsCounter));
}

function updateTotal(t) {
    var totalCart = document.querySelector('.partTotalPrice');
    totalCart.innerHTML = `<p>$${(t/1000).toFixed(3)}.000</p>`;
    localStorage.setItem("finalTotal", t);
}

function updateTotalAfterAdding() {
    var total = 0;
    for (var i = 0; i < productsCounter; i++) {
        var key = "";
        key = "cartHolder" + i;
        var getObjectChange = JSON.parse(localStorage.getItem(key));
        var objPrice = getObjectChange[0].total;
        total += Number(objPrice);
    }
    var totalCart = document.querySelector('.partTotalPrice');
    totalCart.innerHTML = `<p>$${(total/1000).toFixed(3)}.000</p>`;
    localStorage.setItem("finalTotal", total);
}

function updateProductsCounter() {
    for (var i = 0; i < productsCounter; i++) {
        var key = "";
        key = "cartHolder" + i;
        productsCounter = 0;
        var getObjectChange = JSON.parse(localStorage.getItem(key));
        if (!getObjectChange) {
            productsCounter++;
        }
    }
    localStorage.setItem("productsCounter", productsCounter);
}

function createCartEmptyCartDiv() {

    var cartTable = document.querySelector('.bike-cart-table');
    var cartWrap = document.querySelector('.cart-table-wrap');
    var emptyCart = document.createElement("div");
    emptyCart.className = "cart-content-wrap-empty";
    emptyCart.innerHTML = `<p class="cart-content_title bolder">is Empty</p>
    <p class="cart-content_text">Nothin' to see here.</p>
    <p class="cart-content_text">Check out our bikes.</p>
    <a class="cart-header_contShopping" href="../shop/bikes.html">Continue Shopping</a>`;
    cartTable.insertBefore(emptyCart, cartWrap);
    $('.cart-table-wrap').hide();
}

function createTrElementsInCart() {
    for (let j = 0; j < productsCounter; j++) {
        let key = "";
        key = "cartHolder" + j;
        var getObject = JSON.parse(localStorage.getItem(key));
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
        <td class="cart-section-category-title partQty addedItem uppercase align-cent"> <input type="text" value="${getObject[i].qty}" class="bike-qty_option"></td>
        <td class="cart-section-category-title partPrice addedItem">$${((getObject[i].total)/1000).toFixed(3)}.000</td>
        <td class="cart-section-category-title-btn partDelBtn addedItem"><input
                type="button" class="deleteItem cartHolder${j}" id="cartHolder${j}""></input></td>`;
            cart.insertBefore(cartProducts, totalContainer);
        }
    }
}

function showCart() {
    if (JSON.parse(localStorage.getItem('cartHolder0')) == null) {
        createCartEmptyCartDiv();
    } else {
        createTrElementsInCart();
    }
    // Delete Item From Cart
    $('.partDelBtn').click(function () {

        var classNameDelBtn = $(this).find('.deleteItem').attr('id');

        for (var i = 0; i < productsCounter; i++) {
            var key = "";
            key = "cartHolder" + i;
            var firstObj = JSON.parse(localStorage.getItem(key));
            if (classNameDelBtn == key) {
                for (var j = i + 1; j < productsCounter; j++) {
                    var nextKey = "";
                    nextKey = "cartHolder" + j;
                    localStorage.removeItem(firstObj);
                    var secondObj = JSON.parse(localStorage.getItem(nextKey));
                    if (secondObj != null) {
                        localStorage.setItem(key, JSON.stringify(secondObj));
                    } else {
                        var lastKey = "";
                        lastKey = "cartHolder" + productsCounter;
                        localStorage.removeItem(lastKey);
                    }



                    var nextNextKey = "";
                    nextNextKey = "cartHolder" + `${j+1}`;
                    var thurdObj = JSON.parse(localStorage.getItem(nextNextKey));
                    localStorage.setItem(nextKey, JSON.stringify(thurdObj));
                    localStorage.removeItem(nextNextKey);
                }
            }

        }
        var name = $(this).parent().find('.whyNot').attr("href").replace('.html', '');
        $(this).parent().remove();
        // getObject[0] = "";
        // var index = getObject.indexOf(name);
        // if (index > -1) {
        //     getObject.splice(index, 1);
        //     localStorage.setItem(getObject, JSON.stringify(getObject));
        // }

        productsCounter -= 1;
        localStorage.setItem("productsCounter", productsCounter);
        updateIconCounter();
        updateTotalAfterAdding();
        for (var g = i + 1; g < productsCounter; g++) {
            var asd = "";
            asd = "cartHolder" + g;
            var dsa = JSON.parse(localStorage.getItem(asd));
            if (!dsa) {
                localStorage.removeItem(asd);
            }
        }
        var checkItems = localStorage.addedItemsCounter;
        if (checkItems == 0) {
            localStorage.clear();
            createCartEmptyCartDiv();
            $('.cart-content-wrap-empty').show();
        }
    });

    // Change Product Qtity in CART
    $('.bike-qty_option').change(function () {
        var currentName = $(this).parent().parent().find('.whyNot').text();
        var currentQty = $(this).val();
        var currentSize = $(this).parent().parent().find('.partSize').text();
        for (var i = 0; i < productsCounter; i++) {
            var key = "";
            key = "cartHolder" + i;
            var getObjectChange = JSON.parse(localStorage.getItem(key));
            var objName = getObjectChange[0].name;
            var objSize = getObjectChange[0].size;
            var objTotal = getObjectChange[0].total;
            var objPrice = getObjectChange[0].price;

            // Check for repeating item
            var compare1 = currentName.localeCompare(objName);
            var compare2 = currentSize.localeCompare(objSize);
            if (compare1 === 0 && compare2 === 0) {
                getObjectChange[0].qty = currentQty;
                currentQty = getObjectChange[0].qty;
                objTotal = Number(currentQty) * Number(objPrice);
                getObjectChange[0].total = objTotal;
                localStorage.setItem(key, JSON.stringify(getObjectChange));
                $(this).parent().parent().find('.partPrice').text(`$${(objTotal/1000).toFixed(3)}.000`);
            }
        }
        updateIconCounter();
        updateTotalAfterAdding();
        updateProductsCounter();
    });
}



window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) {
        $('.navigation-scroll-hidden').slideDown();
    }
});