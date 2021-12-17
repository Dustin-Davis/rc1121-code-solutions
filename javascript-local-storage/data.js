/* exported todos */

var todos = [];

var previousTodosJson = this.localStorage.getItem('javascript-local-storage');

if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}

window.addEventListener('beforeunload', function () {
  var todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
