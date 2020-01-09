function onLoad() {
    function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    if (localStorage.getItem("addedItemsCounter") === null) {
        localStorage.setItem("addedItemsCounter", 0);
    } else {
        var addedItemsCounter = localStorage.addedItemsCounter;
        var prodCountCartIcon = document.querySelector('.cartIconProdCount-a');
        prodCountCartIcon.innerHTML = `<p class="cartIconProdCount">${addedItemsCounter}</p>`;
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

function timeOutAddingCart(result) {
    setTimeout(function () {
        result.hide();
    }, 2000);
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
        var firstObjQty = firstObj[0].qty;
        for (var j = i + 1; j < productsCounter; j++) {
            var nextKey = "";
            nextKey = "cartHolder" + j;
            var secondObj = JSON.parse(localStorage.getItem(nextKey));
            if (!secondObj) {
                continue;
            }
            var secondObjName = secondObj[0].name;
            var secondObjSize = secondObj[0].size;
            var secondObjQty = secondObj[0].qty;

            var compareName = firstObjName.localeCompare(secondObjName);
            var compareSize = firstObjSize.localeCompare(secondObjSize);
            var compareQty = firstObjQty.localeCompare(secondObjQty);
            if (compareName === 0 && compareSize === 0) {
                if (compareQty === 0) {
                    var ItemExists = $('.ItemExists');
                    ItemExists.show();
                    timeOutAddingCart(ItemExists);
                } else {
                    var ItemSuccessfulUpdate = $('.ItemSuccessfulUpdate-p-wrap');
                    ItemSuccessfulUpdate.show();
                    timeOutAddingCart(ItemSuccessfulUpdate);
                }
                localStorage.setItem(key, JSON.stringify(secondObj));
                localStorage.removeItem(nextKey);
                productsCounter -= 1;
                localStorage.setItem("productsCounter", productsCounter);
                updateIconCounter();
                updateTotalAfterAdding();

            }
        }
    }
    var ItemSuccessfulAdd = $('.ItemSuccessfulAdd');
    ItemSuccessfulAdd.show();
    timeOutAddingCart(ItemSuccessfulAdd);
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

    itemName = cartItemName.replace("-", "");
    itemName = cartItemName.replace(".", "_");

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

    // cartHolder2[currentBike.name] = currentBike;

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
    var prodCountCartIcon = document.querySelectorAll('.cartIconProdCount-a');
    prodCountCartIcon.forEach(prodCountCartIcon => {
        prodCountCartIcon.innerHTML = `<p class="cartIconProdCount">${cartItemsCounter}</p>`;
        localStorage.setItem("addedItemsCounter", Number(cartItemsCounter));
        if (cartItemsCounter > 0) {
            $('.cartIconProdCount').addClass('active-links');
        } else {
            $('.cartIconProdCount').hide();
        }
    });
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
            cartProducts.className = "cart-section-category generated";
            cartProducts.innerHTML = `<td class="cart-section-category-title partNum addedItem uppercase">${getObject[i].partNum}-${getObject[i].size}</td>
        <td class="cart-section-category-title partName addedItem"><a class="whyNot hoverRed" href="./shop_individual_bikes/${getObject[i].type}/${getObject[i].html}">${getObject[i].name.replace('_','.')}</a></td>
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

        // var classNameDelBtn = $(this).find('.deleteItem').attr('id');
        var DelBtnNum = $(this).find('.deleteItem').attr('id').replace("cartHolder", "");



        // var firstObj = JSON.parse(localStorage.getItem(classNameDelBtn));

        for (var j = Number(DelBtnNum) + 1; j <= productsCounter; j++) {
            var nextKey = "";
            nextKey = "cartHolder" + j;
            var previous = "";
            previous = "cartHolder" + `${j - 1}`;
            // localStorage.removeItem(firstObj);
            var secondObj = JSON.parse(localStorage.getItem(nextKey));
            if (secondObj != null) {
                localStorage.setItem(previous, JSON.stringify(secondObj));
                var IdCounter = j - 1;

                var previousId = $('#cartHolder' + IdCounter).attr('id');
                // prop({property:value, property:value, ...})
                var nextKeyId = $('#cartHolder' + j).prop({
                    id: previousId,
                    class: "deleteItem " + previousId
                });

                nextKeyId = previousId;
                console.log(nextKeyId);
                console.log(previousId);

                if (j == productsCounter - 1) {
                    var lastKey = "";
                    lastKey = "cartHolder" + j;
                    localStorage.removeItem(lastKey);
                }
            }
        }

        // var name = $(this).parent().find('.whyNot').attr("href").replace('.html', '');
        $(this).parent().remove();

        productsCounter -= 1;
        localStorage.setItem("productsCounter", productsCounter);
        updateIconCounter();
        updateTotalAfterAdding();
        for (var g = 0; g < productsCounter; g++) {
            var asd = "";
            asd = "cartHolder" + g;
            var dsa = JSON.parse(localStorage.getItem(asd));
            if (dsa == null) {
                localStorage.removeItem(dsa);
            }
        }
        var checkItems = localStorage.addedItemsCounter;
        var pickCartHolder1 = $('#cartHolder1').attr('id');
        // && pickCartHolder1 == undefined
        if (checkItems == 0) {
            localStorage.clear();
            createCartEmptyCartDiv();
            $('.cart-content-wrap-empty').show();
        } else if (checkItems == 2) {
            location.reload();
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