import React from "react"
export const MOCK_BOOKS = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    language: "English",
    borrowPrice: 10.50,
    status: "Available",
    publicationDate: "1988-01-01",
    isbn: "978-0062315007",
    coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    description: "A global phenomenon, The Alchemist has been read and loved by over sixty-two million readers."
  },
  {
    id: 2,
    title: "عزازيل",
    author: "يوسف زيدان",
    genre: "Historical Fiction",
    language: "Arabic",
    borrowPrice: 15.00,
    status: "Borrowed",
    publicationDate: "2008-05-15",
    isbn: "978-9774590124",
    coverImage: "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
    description: "رواية تاريخية تدور أحداثها في القرن الخامس الميلادي بين صعيد مصر والإسكندرية وشمال سوريا."
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    language: "English",
    borrowPrice: 12.00,
    status: "Available",
    publicationDate: "1925-04-10",
    isbn: "978-0743273565",
    coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
  }
];

export const MOCK_USER = {
  id: 101,
  name: "Ahmed Reader",
  role: "Admin",
  email: "reader@test.com"
};