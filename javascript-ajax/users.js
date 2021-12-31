var user = document.querySelector('#user-list');

var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.responseType = 'json';
request.addEventListener('load', function () {
  console.log(request.status);
  console.log(request.response);

  request.response.forEach(function (element) {
    var li = document.createElement('li');
    li.textContent = element.name;
    user.appendChild(li);

  });

});
request.send();
