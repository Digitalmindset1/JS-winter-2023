// Write a function that takes in an array of objects representing books, where each object has properties for title, author, and published, and returns an array of strings representing the titles of all the books published in the year 2000 or later.


function getTitlesPublishedAfterYear2000(books) {
    return books
        .filter(book => book.published >= 2000)
        .map(book => book.title);
}

const booksArray = [
    { title: 'Book 1', author: 'Author 1', published: 1999 },
    { title: 'Book 2', author: 'Author 2', published: 2005 },
    { title: 'Book 3', author: 'Author 3', published: 2002 },
    { title: 'Book 4', author: 'Author 4', published: 1998 }
];

const titlesPublishedAfterYear2000 = getTitlesPublishedAfterYear2000(booksArray);
console.log('Titles published after 2000:', titlesPublishedAfterYear2000);

