// check local storage empty?. If so create key
// window.localStorage.setItem('StumpJumperPro29', JSON.stringify(StumpJumperPro29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
// window.localStorage.setItem('StumpJumperExpert29', JSON.stringify(StumpJumperExpert29));
for (let i = 0; i < 2; i++) {
    if (localStorage.getItem(localStorage.key(i)) === null) {
        // let NewBikesInfo += bikesPagesOnly[i].concat('Info');
        console.log(arrBikesInfo);
        window.localStorage.setItem(`${bikesPagesOnly[i]}`, JSON.stringify(arrBikesInfo[i]));

    }
}
for (let i = 0; i < bikesPagesOnly.length; i++) {
    var currentPageName = bikesPagesOnly[i];
    var fullPageName = currentPageName.concat('.html');
    if (window.location.href.indexOf(fullPageName) > -1) {
        console.log(fullPageName);
        var currentItem = JSON.parse(localStorage.getItem(`${currentPageName}`));
        $('.thumbsUp-rating-count').text(currentItem.thumbsUp);
        $('.thumbsDown-rating-count').text(currentItem.thumbsDown);
        var upClicked = 5;
        currentItem.thumbsUp = upClicked;

        // console.log(currentItem.thumbsUp);
    }
}
// for (let i = 0; i < localStorage.length; i++) {
//     if (localStorage.getItem(localStorage.key(i)) === null) {
//         window.localStorage.setItem(`${bikesPagesOnly[i]}`, JSON.stringify(`${arrBikesInfo[i]}`));

//     }
// }