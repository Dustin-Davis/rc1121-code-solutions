function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $button = document.querySelector('.click-button');

$button.addEventListener('click', handleClick, true);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');

$hover.addEventListener('mouseover', handleMouseover, true);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick, true);
