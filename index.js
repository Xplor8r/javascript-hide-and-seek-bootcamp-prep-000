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
  var deep = document.getElementById('grand-node').querySelectorAll('div#grand-node div');
  var Chi;
  for (let i = 0; i < deep.length -1; i++) {
  var chi = deep[i].querySelector('div')
  }
  return d
}
