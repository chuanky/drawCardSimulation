//TODO:
//pick picture randomly
	//low tier with high probability
	//indicator shows how many chances left
	//shadow with starts
let current;
let imgs;
// let counter = [0, 0, 0, 0, 0, 0];
// let itr = 0;
function setup() {
  createCanvas(720, 400);
  current = second();
  initializeImgs();
}

function draw() {
  if (current != second()) {
    background(220);
    var r = randomRankGaussian();
    // counter[r - 1]++;
    // console.log(counter, itr);
    var heros = getHerosByRank(r);
    var img = heros[getRandomInt(heros.length)]
    image(img, 0, 0, width, height);
    // itr++;
    current = second();
  }

  
}

function initializeImgs() {
  //heros have 6 ranks
  imgs = [
    {img: loadImage('assets/fullPicture/Exusiai.png'), rank: 6}, 
    {img: loadImage('assets/fullPicture/BluePoison.png'), rank: 5}, 
    {img: loadImage('assets/fullPicture/Firewatch.png'), rank: 5}, 
    {img: loadImage('assets/fullPicture/Meteorite.png'), rank: 5}, 
    {img: loadImage('assets/fullPicture/Platinum.png'), rank: 5}, 
    {img: loadImage('assets/fullPicture/Provence.png'), rank: 5}, 
    {img: loadImage('assets/fullPicture/Jessica.png'), rank: 4}, 
    {img: loadImage('assets/fullPicture/May.png'), rank: 4}, 
    {img: loadImage('assets/fullPicture/ShiraYuki.png'), rank: 4}, 
    {img: loadImage('assets/fullPicture/Meteor.png'), rank: 4}, 
    {img: loadImage('assets/fullPicture/Kroos.png'), rank: 3}, 
    {img: loadImage('assets/fullPicture/Adnachiel.png'), rank: 3}, 
    {img: loadImage('assets/fullPicture/Catapult.png'), rank: 3}, 
    {img: loadImage('assets/fullPicture/Rangers.png'), rank: 2}, 
    {img: loadImage('assets/fullPicture/Lancet-2.png'), rank: 1}, 
  ];
}

function randomRankGaussian() {
  let x = randomGaussian(50, 15);
  if (x >= 72.5) {
    return 6;
  }
  if (x >= 60 && x < 72.5) {
    return 5;
  }
  if (x >= 45 && x < 60) {
    return 4;
  }
  if (x >= 24 && x < 45) {
    return 3;
  }
  if (x >= 15 && x < 24) {
    return 2;
  }
  if (x < 15) {
    return 1;
  }
}

function getHerosByRank(rank) {
  var result = [];
  imgs.forEach(element => {
    if (rank == element.rank) {
      result.push(element.img);
    }
  });

  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}