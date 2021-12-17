var keys = 0;
var $letters = document.querySelectorAll('span');
var $character = document.querySelector('.character');

document.addEventListener('keydown', function (event) {
  if (event.key !== $letters[keys].textContent) {
    $character.className = 'character wrong';
  } else {
    $character.className = 'character correct';
    keys++;
    $character = $character.nextElementSibling;

  }
});
