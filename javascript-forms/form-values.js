var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var value = [];
  var inputs = document.getElementById('contact-form').elements;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].id) {
      value[inputs[i].id] = inputs[i].value;

    }
  }
  console.log('message data:', value);
  document.getElementById('contact-form').reset();

});
