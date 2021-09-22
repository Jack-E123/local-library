

function findAuthorById(authors, id) {
  return authors.find((author)=> author.id == id);
}

function findBookById(books, id) {
  return books.find((book)=> book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter((book)=> book.borrows[0].returned);
  let checkedOut = books.filter((book)=> !book.borrows[0].returned);
  let allBooks = [checkedOut, returned];
  return allBooks;
}
//helper function 
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id); 
}
function getBorrowersForBook(book, accounts) {
  /*let borrowers = [];
  for (let i = 0; i < book.borrows.length; i++){
    for (let j in accounts){
      if (j[id] == books[i].borrows)
    }
  }*/

  let transactions = book.borrows;
  let result = transactions.map((transaction)=> {
    //calling helper function
    const accInfo = findAccountById(accounts, transaction.id) 
    const newTransaction = {
      ...transaction,
      ...accInfo,
    };
    return newTransaction;
  });
  return result.slice(0,10);
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
