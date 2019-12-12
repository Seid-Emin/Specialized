// check local storage empty?. If so create key
// window.localStorage.setItem('StumpJumperPro29', JSON.stringify(StumpJumperPro29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
for (let i = 0; i < arrBikesInfo.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        // let NewBikesInfo += bikesPagesOnly[i].concat('Info');
        localStorage.setItem(`${bikesPagesOnly[i]}`, JSON.stringify(arrBikesInfo[i]));

    }
};
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
// Thumb Up
$('.rating-icon_thumbsUp').click(function () {
    let currentUpCount = parseInt(currentItem.thumbsUp);
    currentItem.thumbsUp = ++currentUpCount;
    currentUpCount = increase("Up", currentUpCount);;
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
}