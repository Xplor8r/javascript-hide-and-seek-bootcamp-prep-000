function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel;
}
function nestedTarget () {
  var tar = document.getElementsByTagName('div') [4];
  return tar;
}
function increaseRankBy(n) {
  var Rank=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
function deepestChild() {
  
}
