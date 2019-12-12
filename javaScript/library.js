// variables

var up = $('.thumbsUp-rating-count');
var down = $('.thumbsDown-rating-count')

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

// S - Works Bikes
let SWorksDemo8 = new bikesInfo('S-Works Demo 8', 'shop_individual_bikes/s-works/img/S-WorksDemo8[1]_dot.svg', '7500', '0', '0', 's');
let SWorksDemoEpicEVO = new bikesInfo('S-Works Demo Epic EVO', 'shop_individual_bikes/s-works/img/S-WorksDemoEpicEVO[2]_dot.svg', '8400', '0', '0', 's');
let SWorksStumpJumper29 = new bikesInfo('S-Works StumpJumper 29', 'shop_individual_bikes/s-works/img/S-WorksStumpJumper29[3]_[4]_dot.svg', '7400', '0', '0', 's');
let SWorksStumpJumper27_5 = new bikesInfo('S-Works StumpJumper 27.5', 'shop_individual_bikes/s-works/img/S-WorksStumpJumper29[3]_[4]_dot.svg', '7400', '0', '0', 's');
let SWorksDemo8Frame = new bikesInfo('S-Works Demo 8 Frame', 'shop_individual_bikes/s-works/img/S-WorksDemo8Frame[5]_dot.svg', '1000', '0', '0', 's');

let arrBikesInfo = [StumpJumperPro29, StumpJumperExpert29, StumpJumperExpert27_5, FuseExpert29, FuseExpert27_5, DemoRace29, DemoExpert29, DemoAlloy27_5, SWorksDemo8, SWorksDemoEpicEVO, SWorksStumpJumper29, SWorksStumpJumper27_5, SWorksDemo8Frame];