function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel;
}
function nestedTarget () {
  var targ = document.getElementsByTagName('div') [4];
  return targ;
}
function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}
function deepestChild() {
  var deep = document.getElementById('app').querySelectorAll('div.grand-node div');
  for (let i = 0; i < deep.length; i++) {
  deep[i].innerHTML = (i + 1).toString();
  }
}
