let cloud1 = document.getElementById('cloudmove');
let cloud2 = document.getElementById('cloudmove2');
let stars = document.getElementById('stars');

window.addEventListener('scroll', function(){
   let value = window.scrollY;
   cloud1.style.left = value * 2 + 'px';
   cloud2.style.right = value * 4 + 'px';
   stars.style.right = value + 'px';
 })



