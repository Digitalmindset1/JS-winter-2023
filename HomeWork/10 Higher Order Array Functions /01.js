// Write a function that takes an array of objects representing books and returns an array containing the titles of those books.

let books = [
        {title : 'Title01', year : 1992},
        {title : 'Title02', year : 2003},
        {title : 'Title03', year : 2012}
    ]

let booksTitle = books.map((book) => {
    return book.title;
    });
    console.log(booksTitle);