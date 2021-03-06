// variables
const pageNames = ['index', 'bikes', 'trail', 'downhill', 'sworks', 'StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27_5', 'FuseExpert29', 'FuseExpert27_5', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27_5', 'SWorksDemo8', 'SWorksDemoEpicEVO', 'SWorksStumpJumper29', 'SWorksStumpJumper27_5', 'SWorksDemo8Frame', 'inside_specialized'];
const bikesPagesOnly = ['StumpJumperPro29', 'StumpJumperExpert29', 'StumpJumperExpert27_5', 'FuseExpert29', 'FuseExpert27_5', 'DemoExpert29', 'DemoRace29', 'DemoAlloy27_5', 'SWorksDemo8', 'SWorksDemoEpicEVO', 'SWorksStumpJumper29', 'SWorksStumpJumper27_5', 'SWorksDemo8Frame'];

function bikesInfo(name, color, price, thumbsUp, thumbsDown, size, type, partNum, qty, html, total) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.thumbsUp = thumbsUp;
    this.thumbsDown = thumbsDown;
    this.size = size;
    this.type = type;
    this.partNum = partNum;
    this.qty = qty;
    this.html = html;
    this.total = total;
}

// Trail Bikes
var StumpJumperPro29 = new bikesInfo('StumpJumper Pro 29', 'shop_individual_bikes/trail/img/StumpJumperPro29-Hero_[1].svg', '3300', '0', '0', 's', 'trail', '94519-0001', '1', 'StumpJumperPro29.html', '0');
var StumpJumperExpert29 = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/trail/img/SJ-EX29-27.d14557fd[2],[3].svg', '2200', '0', '0', 's', 'trail', '94519-0002', '1', 'StumpJumperExpert29.html', '0');
var StumpJumperExpert27_5 = new bikesInfo('StumpJumper Expert 27_5', 'shop_individual_bikes/trail/img/SJ-EX29-27.d14557fd[2],[3].svg', '2000', '0', '0', 's', 'trail', '94519-0003', '1', 'StumpJumperExpert27_5.html', '0');
var FuseExpert29 = new bikesInfo('FuseExpert 29', 'shop_individual_bikes/trail/img/Fuse Expert 29[4].svg', '1100', '0', '0', 's', 'trail', '94519-0004', '1', 'FuseExpert29.html', '0');
var FuseExpert27_5 = new bikesInfo('FuseExpert 27_5', 'shop_individual_bikes/trail/img/Fuse Expert 27[5].svg', '1000', '0', '0', 's', 'trail', '94519-0005', '1', 'FuseExpert27_5.html', '0');

// Downhill Bikes
var DemoExpert29 = new bikesInfo('StumpJumper Expert 29', 'shop_individual_bikes/downhill/img/DEMO-RACE-29[2]_dot.svg', '3000', '0', '0', 's', 'downhill', '94519-0006', '1', 'DemoExpert29.html', '0');
var DemoRace29 = new bikesInfo('DemoRace 29', 'shop_individual_bikes/downhill/img/DEMO-RACE-29[2]_dot.svg', '4500', '0', '0', 's', 'downhill', '94519-0007', '1', 'DemoRace29.html', '0');
var DemoAlloy27_5 = new bikesInfo('DemoAlloy 27_5', 'shop_individual_bikes/downhill/img/DemoAlloy29[3]_dot.svg', '1400', '0', '0', 's', 'downhill', '94519-0008', '1', 'DemoAlloy27_5.html', '0');

// S - Works Bikes
var SWorksDemo8 = new bikesInfo('S-Works Demo 8', 'shop_individual_bikes/s-works/img/S-WorksDemo8[1]_dot.svg', '7500', '0', '0', 's', 's-works', '94519-0009', '1', 'SWorksDemo8.html', '0');
var SWorksDemoEpicEVO = new bikesInfo('S-Works Demo Epic EVO', 'shop_individual_bikes/s-works/img/S-WorksDemoEpicEVO[2]_dot.svg', '8400', '0', '0', 's', 's-works', '94519-0010', '1', 'SWorksDemoEpicEVO.html', '0');
var SWorksStumpJumper29 = new bikesInfo('S-Works StumpJumper 29', 'shop_individual_bikes/s-works/img/S-WorksStumpJumper29[3]_[4]_dot.svg', '7400', '0', '0', 's', 's-works', '94519-0011', '1', 'SWorksStumpJumper29.html', '0');
var SWorksStumpJumper27_5 = new bikesInfo('S-Works StumpJumper 27_5', 'shop_individual_bikes/s-works/img/S-WorksStumpJumper29[3]_[4]_dot.svg', '7400', '0', '0', 's', 's-works', '94519-0012', '1', 'SWorksStumpJumper27_5.html', '0');
var SWorksDemo8Frame = new bikesInfo('S-Works Demo 8 Frame', 'shop_individual_bikes/s-works/img/S-WorksDemo8Frame[5]_dot.svg', '1000', '0', '0', 's', 's-works', '94519-0013', '1', 'SWorksDemo8Frame.html', '0');

var arrBikesInfo = [StumpJumperPro29, StumpJumperExpert29, StumpJumperExpert27_5, FuseExpert29, FuseExpert27_5, DemoExpert29, DemoRace29, DemoAlloy27_5, SWorksDemo8, SWorksDemoEpicEVO, SWorksStumpJumper29, SWorksStumpJumper27_5, SWorksDemo8Frame];
var arrWrapPages = ['index', 'bikes', 'trail', 'downhill', 'sworks', 'inside_specialized'];