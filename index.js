function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel;
}
function nestedTarget () {
  var tar = document.getElementsByTagName('div') [4];
  return tar;
}
function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}
function deepestChild() {
  
}
