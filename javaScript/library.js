var tempPageName = "";
const pageNames = ['index', 'bikes', 'trail', 'downhill', 's-works', 'StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27.5', 'FuseExpert29', 'FuseExpert27', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27.5', 'S-WorksDemo8', 'S-WorksDemoEpicEVO', 'S-WorksStumpJumper29', 'S-WorksStumpJumper27.5', 'S-WorksDemo8Frame'];
const bikesPagesOnly = ['StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27.5', 'FuseExpert29', 'FuseExpert27', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27.5', 'S-WorksDemo8', 'S-WorksDemoEpicEVO', 'S-WorksStumpJumper29', 'S-WorksStumpJumper27.5', 'S-WorksDemo8Frame'];

function bikesInfo(name, color, price, thumbsUp, thumbsDown, size) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.thumbsUp = thumbsUp;
    this.thumbsDown = thumbsDown;
    this.size = size;
};

let StumpJumperPro29Info = new bikesInfo('StumpJumper Pro 29', 'shop_individual_bikes/trail/img/StumpJumperPro29-Hero_[1].svg', '3300', '0', '0', 's');
let StumpJumperExpert29Info = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/trail/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's');

let arrBikesInfo = [StumpJumperPro29Info, StumpJumperExpert29Info];

// for (var i = 0; i < 2; i++) {
//     let currentBikeName = bikesPagesOnly[i];
//     let replaced = currentBikeName.replace('_', '');
//     window.localStorage.setItem(currentBikeName, JSON.stringify("'' + ${replaced}"));
// }