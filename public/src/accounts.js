function findAccountById(accounts, id) {
      return accounts.find((account) => account.id == id); 
}

function sortAccountsByLastName(accounts) {
return accounts.sort((a,b)=> a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
     //i need to separate the borrows array from the rest of the object
     //find the all the times that book has been borrowed by account
     //add it all up and return it
     const { id } = account;
     let total = 0;
     for (let book in books) {
       const { borrows } = books[book];
       borrows.forEach((element) => {
         if (element.id === id) {
           total++;
         }
       })
     }
     return total;
   }


function getBooksPossessedByAccount(account, books, authors) {
  /*const accountId = account.id;
  let checked = [];
  const {borrows} = books[borrows]
  for (let i = 0; i < books.length; i++){
    if (accountId == books[i].borrows[0].id && books.borrows[0].returned == false){
      checked.push(books[i]);
    }
  }
  let booksAndAuthors = checked.map((check)=> {
    for (let i = 0; i < authors.length; i++){
      if (authors[i].id == check.authorId){
        //add authors to checked
        check.author = authors[i];
      }
    }
  })*/
  const {id} = account;
  let result = [];
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === id && !borrow.returned);
  });
  result = result.map((book) => {
    const author = authors.find((author1) => author1.id === book.authorId);
    const newBook = { // i think maybe this can be shortened by returning result = newbook contents
      ...book,
      author,
    };
    return newBook;
  });
  return result;

}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
