// check local storage empty?. If so create key
// window.localStorage.setItem('StumpJumperPro29', JSON.stringify(StumpJumperPro29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
for (let i = 0; i < arrBikesInfo.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        // let NewBikesInfo += bikesPagesOnly[i].concat('Info');
        window.localStorage.setItem(`${bikesPagesOnly[i]}`, JSON.stringify(arrBikesInfo[i]));

    }
};
for (let i = 0; i < bikesPagesOnly.length; i++) {
    var currentPageName = bikesPagesOnly[i];
    var fullPageName = currentPageName.concat('.html');
    if (window.location.href.indexOf(fullPageName) > -1) {
        var PageName = fullPageName;
        var currentItem = JSON.parse(localStorage.getItem(`${currentPageName}`));
        $('.thumbsUp-rating-count').text(currentItem.thumbsUp);
        $('.thumbsDown-rating-count').text(currentItem.thumbsDown);
        var upClicked = 15;
        currentItem.thumbsUp = upClicked;
        console.log(currentItem);
        $('.thumbsUp-rating-count').text(currentItem.thumbsUp);
    }
}
console.log(currentItem.thumbsUp);