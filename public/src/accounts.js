function findAccountById(accounts, id) {
      return accounts.find((account) => account.id == id); 
}

function sortAccountsByLastName(accounts) {
return accounts.sort((a,b)=> a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
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
   const {id} = account;
  let result = [];
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === id && !borrow.returned);
  });
  result = result.map((book) => {
    const author = authors.find((author1) => author1.id === book.authorId);
    return newBook = { 
      ...book,
      author,
    };
    
  });
  return result;

}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
