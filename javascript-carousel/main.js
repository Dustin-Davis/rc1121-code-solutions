var $currentImage = document.querySelector('.image');
var $icons = document.getElementsByClassName('img');
var $iconContainer = document.getElementById('icon');
var $previousButton = document.getElementById('previous');
var $nextButton = document.getElementById('next');

var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var index = 0;

var carouselId = null;

function carousel() {
  index++;
  if (index > imgArray.length - 1) {
    index = 0;
  }
  $currentImage.src = imgArray[index];
  $icons[index].classList.remove('far');
  $icons[index].classList.add('fas');
  for (var curIcon of $icons) {
    if (curIcon !== $icons[index]) {
      curIcon.classList.remove('fas');
      curIcon.classList.add('far');
    }
  }
}
carouselId = setInterval(carousel, 3000);
function previousImg(event) {
  clearInterval(carouselId);
  if (index >= 0) {
    index -= 1;
  }
  if (index < 0) {
    index = imgArray.length - 1;
  }
  $currentImage.src = imgArray[index];
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');
  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  carouselId = setInterval(carousel, 3000);
}
$previousButton.addEventListener('click', previousImg);
function nextImg(event) {
  clearInterval(carouselId);
  if (index <= imgArray.length - 1) {
    index += 1;
  }
  if (index > imgArray.length - 1) {
    index = 0;
  }
  $currentImage.src = imgArray[index];
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');
  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  carouselId = setInterval(carousel, 3000);
}
$nextButton.addEventListener('click', nextImg);
function navigateImgs(event) {
  clearInterval(carouselId);
  if (event.target.tagName !== 'I') {
    return;
  }
  var $navButton = event.target.closest('.img');
  index = +$navButton.id;
  $currentImage.src = imgArray[index];
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');
  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  carouselId = setInterval(carousel, 3000);
}
$iconContainer.addEventListener('click', navigateImgs);
