function getTotalBooksCount(books) {
 return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == false){
      total += 1
    }
  }
  return total;
}

function getMostCommonGenres(books) {
  
  const result = books.reduce((acc, book) => {
    const genre = book.genre;
    const genreInfo = acc.find((element) => element.name === genre);
    if (!genreInfo) {
      const newGenreInfo = {
        name: genre,
        count: 1,
      };
      acc.push(newGenreInfo);
    } else {
      genreInfo.count++;
    }

    return acc;
  }, []);
  return result.sort((genreA, genreB) => genreB.count - genreA.count).slice(0,5);
  

}

function getMostPopularBooks(books) {
 const groupById = books.reduce((acc, book) => {
    acc[book.id] = book.borrows.length;
    return acc
}, {});
const keys = Object.keys(groupById);
let sorted = keys.sort((keyA, keyB) => {
  if(groupById[keyA]>groupById[keyB]) {
    return -1;
  } else if(groupById[keyB]>groupById[keyA]){
    return 1;
  }
  return 0;
});
let newArr = sorted.map((id) => {
  let book = books.find(book=>book.id === id);
  let count = groupById[id];
  return {name: book.title, count: count}
});
return newArr.slice(0,5);


  
}

function getMostPopularAuthors(books, authors) {
  return authors.map(author => {
    
    author.count = books.filter(book => book.authorId === author.id).reduce((author, book) => author + (book.borrows && book.borrows.length || 0), 0);
    
    author.name = `${author.name.first} ${author.name.last}`;
    delete author.id
    
    return author
  }).sort((a, b) => b.count - a.count).slice(0, 5)

  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
