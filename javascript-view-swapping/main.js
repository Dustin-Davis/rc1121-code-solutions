var $tabcontainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      var item = $tab[i];
      if (item === event.target) {
        item.className = 'tab active';
      } else {
        item.className = 'tab';
      }
    }
  }

  var data = event.target.getAttribute('data-view');
  for (var x = 0; x < $view.length; x++) {
    if ($view[x].getAttribute('data-view') !== data) {
      $view[x].className = 'view hidden';

    } else {
      $view[x].className = 'view';

    }
  }

});
