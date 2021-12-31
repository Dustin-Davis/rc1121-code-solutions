function getPokemonData(name) { // define a function with one parameter
  var xhr = new XMLHttpRequest(); // creating a new request
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name); // initializes a newly created request
  xhr.responseType = 'json'; // the reponse is a JavaScript object created by parsing the contents
  xhr.addEventListener('load', function () { // event will be fired when the whole page is loaded
    console.log(xhr.status); // logging the numerical HTTP status code
    console.log(xhr.response); // logging the reponse body content
  });
  xhr.send(); // sending the request to the server
}

getPokemonData('cubone');
