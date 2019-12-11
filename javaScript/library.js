const pageNames = ['index', 'bikes', 'trail', 'downhill', 'sworks', 'StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27_5', 'FuseExpert29', 'FuseExpert27', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27_5', 'SWorksDemo8', 'SWorksDemoEpicEVO', 'SWorksStumpJumper29', 'SWorksStumpJumper27_5', 'SWorksDemo8Frame'];
const bikesPagesOnly = ['StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27_5', 'FuseExpert29', 'FuseExpert27', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27_5', 'SWorksDemo8', 'SWorksDemoEpicEVO', 'SWorksStumpJumper29', 'SWorksStumpJumper27_5', 'SWorksDemo8Frame'];

function bikesInfo(name, color, price, thumbsUp, thumbsDown, size) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.thumbsUp = thumbsUp;
    this.thumbsDown = thumbsDown;
    this.size = size;
}

// Trail Bikes
let StumpJumperPro29 = new bikesInfo('StumpJumper Pro 29', 'shop_individual_bikes/trail/img/StumpJumperPro29-Hero_[1].svg', '3300', '0', '0', 's');
let StumpJumperExpert29 = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/trail/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's');
let StumpJumperExpert27_5 = new bikesInfo('StumpJumper Expert 27_5', 'shop_individual_bikes/trail/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's');
let FuseExpert29 = new bikesInfo('FuseExpert 29', 'shop_individual_bikes/trail/img/Fuse Expert 29[4].svg', '1100', '0', '0', 's');
let FuseExpert27_5 = new bikesInfo('FuseExpert 27_5', 'shop_individual_bikes/trail/img/Fuse Expert 27[5].svg', '1000', '0', '0', 's');

// Downhill Bikes
let DemoRace29 = new bikesInfo('DemoRace 29', 'shop_individual_bikes/downhill/img/DEMO-RACE-29[2]_dot.svg', '4500', '0', '0', 's');
let DemoExpert29 = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/downhill/img/DEMO-RACE-29[2]_dot.svg', '2000', '0', '0', 's');
let DemoAlloy27_5 = new bikesInfo('DemoAlloy 27_5', 'shop_individual_bikes/downhill/img/DemoAlloy29[3]_dot.svg', '2000', '0', '0', 's');

// S-Works Bikes
// let S - WorksDemo8 = new bikesInfo('StumpJumper Pro 29', 'shop_individual_bikes/s-works/img/S-WorksDemo8[1]_dot.svg', '7800', '0', '0', 's');
// let StumpJumperExpert29 = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/s-works/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's');
// let StumpJumperExpert27_5 = new bikesInfo('StumpJumper Expert 27_5', 'shop_individual_bikes/s-works/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's');
// let FuseExpert29 = new bikesInfo('FuseExpert 29', 'shop_individual_bikes/s-works/img/Fuse Expert 29[4].svg', '1100', '0', '0', 's');
// let FuseExpert27_5 = new bikesInfo('FuseExpert 27_5', 'shop_individual_bikes/s-works/img/Fuse Expert 27[5].svg', '1000', '0', '0', 's');


let arrBikesInfo = [StumpJumperPro29, StumpJumperExpert29, StumpJumperExpert27_5, FuseExpert29, FuseExpert27_5, DemoRace29, DemoExpert29, DemoAlloy27_5];