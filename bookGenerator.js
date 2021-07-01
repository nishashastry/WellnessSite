let books = [
  {
    book: "Blinding Lights",
    author: "Weekend"
  },
 

]
      var x = document.getElementById("quoteGen");
      var y = document.getElementById("songGen");
      var z = document.getElementById("activityGen");
      var a = document.getElementById("bookGen");

function bookDisplay() {
      
        if (a.style.display === "none") {
          a.style.display = "flex";
        } else {
          a.style.display = "none";
        }
}
const bookName = document.querySelector('.bookTitle');
const auth = document.querySelector('.bookAuthor');
const nextBook = document.querySelector('.next'); //instead of nextChoice type the id of ht ebutton of the button above

const getBook = async () => {

  const num = Math.floor(Math.random() * books.length);

  const bookTitle = books[num].book;
  const writer = books[num].author;
  bookName.innerText = bookTitle;
  auth.innerText = writer;
}

nextBook.addEventListener('click', getBook);

getBook();









