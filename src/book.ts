import {Author} from "./author.js";
import {Ratingable} from "./ratingable.js";

export class Book {
  name: string;
  genre: string;
  price: number;
  author: Author;
  reviews: [string, number, string][];
  rating: number;

  constructor(name: string, genre: string, price: number, author: Author, reviews?: string[]) {
    this.name = name
    this.genre = genre
    this.price = price
    this.author = author

    if (reviews) {
      this.reviews = reviews
    } else {
      reviews = []
    }

    if(this.reviews.length > 0){
      const reviewSum = this.reviews.reduce(

      )
    }
  }
}
