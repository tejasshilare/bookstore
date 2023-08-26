const books = [
  {
    ISBN: "9780345391803",
    title: "Jurassic Park",
    author: "Michael Crichton",
    reviews: [],
  },
  {
    ISBN: "9780061120084",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    reviews: [],
  },
  {
    ISBN: "9780743273565",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    reviews: [],
  },
  {
    ISBN: "9781451673319",
    title: "1984",
    author: "George Orwell",
    reviews: [],
  },
  {
    ISBN: "9780140177398",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    reviews: [],
  },
  {
    ISBN: "9780525559474",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    reviews: [],
  },
  {
    ISBN: "9780735219090",
    title: "Becoming",
    author: "Michelle Obama",
    reviews: [],
  },
  // Add more books here
  {
    ISBN: "9781501167713",
    title: "The Alchemist",
    author: "Paulo Coelho",
    reviews: [],
  },
  {
    ISBN: "9781984801810",
    title: "Circe",
    author: "Madeline Miller",
    reviews: [],
  },
  {
    ISBN: "9780525560531",
    title: "Educated",
    author: "Tara Westover",
    reviews: [],
  },
  {
    ISBN: "9780385472579",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    reviews: [],
  },
];

const users = [
  {
    username: "alice123",
    password: "password1",
  },
  {
    username: "bob456",
    password: "password2",
  },
  {
    username: "charlie789",
    password: "newpassword",
  },
  {
    username: "david101",
    password: "books123",
  },
  {
    username: "emily2023",
    password: "read2023",
  },
  {
    username: "frankie456",
    password: "novels456",
  },
  {
    username: "gracebooks",
    password: "lionbooks",
  },
  // ... (more users)
];

const reviews = [
  {
    ISBN: "9780345391803",
    username: "user1",
    review: "Great book!",
  },
  {
    ISBN: "9780061120084",
    username: "user2",
    review: "A classic.",
  },
  {
    ISBN: "9781451673319",
    username: "newuser",
    review: "Thought-provoking story.",
  },
  {
    ISBN: "9780140177398",
    username: "booklover",
    review: "Beautifully written.",
  },
  {
    ISBN: "9780525559474",
    username: "avidreader",
    review: "Captivating and atmospheric.",
  },
  {
    ISBN: "9780735219090",
    username: "novelnerd",
    review: "Inspirational and empowering.",
  },
  {
    ISBN: "9781501167713",
    username: "literarylion",
    review: "A journey of self-discovery.",
  },
  {
    ISBN: "9781984801810",
    username: "classicsfan",
    review: "An enchanting retelling.",
  },
  {
    ISBN: "9780525560531",
    username: "fictionfanatic",
    review: "Compelling and raw.",
  },
  {
    ISBN: "9780385472579",
    username: "booklover",
    review: "A timeless coming-of-age novel.",
  },
];

module.exports = {
  books,
  users,
  reviews,
};
