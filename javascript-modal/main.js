var clicked = 0;
var $open = document.querySelector('.open');
var $popup = document.querySelector('.popup');
var $no = document.querySelector('.no');

$open.addEventListener('click', function () {
  clicked += 1;
  if (clicked % 2) {
    $popup.className = 'popup off';
  }
});

$no.addEventListener('click', function () {
  clicked += 1;
  if (clicked % 2 === 0) {
    $popup.className = 'popup on';
  }
});
