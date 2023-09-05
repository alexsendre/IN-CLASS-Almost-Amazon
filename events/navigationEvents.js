import { favAuthor, getAuthors } from '../api/authorData';
import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { signOut } from '../utils/auth';
import { emptyBooks, showBooks } from '../pages/books';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(user.uid).then((books) => showBooks(books));
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user.uid).then((books) => showBooks(books));
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user.uid).then((authors) => showAuthors(authors));
  });

  document.querySelector('#fav-author').addEventListener('click', () => {
    favAuthor(user.uid).then((author) => showAuthors(author));
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    // console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      searchBooks(searchValue, user.uid).then((search) => {
        if (search.length) {
          showBooks(search);
        } else {
          emptyBooks();
        }
      });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
