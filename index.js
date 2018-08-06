function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel;
}
function nestedTarget () {
  var tar = document.getElementsByTagName('div') [4];
  return tar;
}
function increaseRankBy (n) {
  var parse = parseInt(n +1);
  var rank = document.querySelector('ul.ranked li');
  return rank(parse);
}
function deepestChild() {
  
}
