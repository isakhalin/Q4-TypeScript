import {Book} from './book.js';
import {serialize} from "./helpers.js";
import {books} from "./book-collection.js";

let genre: string = 'fantasy';
let price = 980;

const book = new Book('Harry Potter', genre, price);

console.log(serialize((book)));
console.log(serialize(null));
console.log(serialize(undefined));
console.log(serialize(5));
console.log(serialize(false));

console.log(book.genre.toUpperCase(), book.price.toFixed(2))

if (book.price == null) {
  console.log('Книги нет в продаже')
} else {
  console.log('Вы можете купить книгу')
}

/**
 * @param {string} genre
 * @param {number} pagesLimit
 * @returns {Book}
 */
function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit
  }

  if (multipleRecommendations) {
    return books.filter(findAlgorithm)
  } else {
    return books.find(findAlgorithm)
  }
}

const recommendedBook = findSuitableBook('fantasy', 1000);

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name)
} else {
  console.log(recommendedBook[0].name)
}
