var books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780521402378'
  },
  {
    title: 'The Art of War',
    author: 'SUN TZU',
    isbn: '9781599869773'
  },
  {
    title: 'The Lion, the Witch, and the Wardrobe',
    author: 'C.S. Lewis',
    isbn: '0064404994'
  }

];
console.log('value of books:', typeof books);

var json = JSON.stringify(books);
console.log('value of json:', json, typeof json);

var string = '{"id" : "1234", "name" : "Dustin"}';

console.log('value of string:', string, typeof string);

var Parse = JSON.parse(string);

console.log('value of parse:', Parse, typeof Parse);
