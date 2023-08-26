// app.js
const axios = require("axios");

const baseURL = "http://your-api-url"; // Replace with your API URL

// Task 1: Get the book list available in the shop
async function getBookList() {
  // ... (Same code as provided)
}

// Task 2: Get the books based on ISBN
async function getBooksByISBN(ISBN) {
  // ... (Same code as provided)
}

// Task 3: Get all books by Author
async function getBooksByAuthor(author) {
  // ... (Same code as provided)
}

// Task 4: Get all books based on Title
async function getBooksByTitle(title) {
  // ... (Same code as provided)
}

// Task 5: Get book Review
async function getBookReview(ISBN) {
  // ... (Same code as provided)
}

// Continue implementing other tasks similarly...

// Usage examples
(async () => {
  try {
    const bookList = await getBookList();
    console.log("Book List:", bookList);

    const booksByISBN = await getBooksByISBN("9780345391803");
    console.log("Books by ISBN:", booksByISBN);

    const booksByAuthor = await getBooksByAuthor("Michael Crichton");
    console.log("Books by Author:", booksByAuthor);

    // Perform other tasks
  } catch (error) {
    console.error("Error:", error);
  }
})();
