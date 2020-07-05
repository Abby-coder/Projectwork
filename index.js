//function myFunc1() {
let x = document.getElementById("link1");
x.addEventListener('click' , function(e){
  e.preventDefault();
  document.querySelector('#content1').style.display = "block";
  document.querySelector('#content2').style.display = "none";
});
//}

//function myFunc2() {
let y = document.getElementById("link2");
y.addEventListener('click' , function(e){
e.preventDefault();
  document.querySelector('#content2').style.display = "block";
  document.querySelector('#content1').style.display = "none";
});
//}
