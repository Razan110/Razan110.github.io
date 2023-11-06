//img galury New In Highlighters
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var mybutton = document.getElementById("newIn");



let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides-skincare");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  slides[slideIndex2-1].style.display = "block";  
  setTimeout(showSlides2, 4000); // Change image every 2 seconds
}

var mybutton2 = document.getElementById("skinCarenewIn");

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides-Haircare");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}    
  slides[slideIndex3-1].style.display = "block";  
  setTimeout(showSlides3, 4000); // Change image every 2 seconds
}

var mybutton3 = document.getElementById("HaircarenewIn");


/*products dropdown*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*display ingo*/

function displayInfoMakeup() {
  var txt;
if (alert("Cream Lip Stain is the ultra-matte, long-wear and transfer-proof liquid lipstick offering full coverage and unparalleled comfort. Product type: Liquid lipstick . Finish: Matte")){
  txt="Add to card!"
}else{
  txt="Add to card!"
}
  document.getElementById(id).innerHTML = txt;
}


function displayInfoSkinCare() {
  var txt;
if (alert("This limited-edition Ramadan set features our beloved skincare trio and comes in a stylish pouch for the perfect glow on the go! Together the miniSmoothing Cleanser, full-size All-Day Hydrator & Ultra Glow Serum cleanses, hydrates and visibly improves your skins glow and natural radiance.")){
  txt="Add to card!"
}else{
  txt="Add to card!"
}
  document.getElementById(id).innerHTML = txt;
}


function displayInfoHairCare() {
  var txt;
if (alert("Give your hair what it deserves: Vitamins, fiber, proteins & much more! All the ingredients you need to nourish your hair from the roots are in one set. Let your hair feel loved with these bestsellers, and achieve the healthy hair you have always desired.")){
  txt="Add to card!"
}else{
  txt="Add to card!"
}
  document.getElementById(id).innerHTML = txt;
}

function displayInfoPerfum() {
  var txt;
if (alert("Rose Prick Eau de Parfum presents Bulgarian rose and rose de mai, pierced with thorns of fiery pepper and spice while Indonesian patchouli exhales around Turkish rose's precious heart. Sharp and pristine, a perfume so lovely it hurts.")){
  txt="Add to card!"
}else{
  txt="Add to card!"
}
  document.getElementById(id).innerHTML = txt;
}


function displayInfoBathAndBody() {
  var txt;
if (alert("Beamcream Smoothing Body Moisturizer is a face-worthy body moisturizer packed with powerful ingredients that brightens, retexturizes and instantly hydrates for smoother, more even skin.")){
  txt="Add to card!"
}else{
  txt="Add to card!"
}
  document.getElementById(id).innerHTML = txt;
}







