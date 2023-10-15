const myLibrary = [];
let newBook;

//creates new book

function Book(title, author, pages, finished) {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.finished = document.getElementById('finished').checked;
};

//add new book to library

function addBookToLibrary() {
    //take newBook and add it to the myLibrary array

    const newBook = new Book(title , author, pages, finished);
    myLibrary.push(newBook);

    //erase all divs in book-display

    clearCards();

    //create cards by looping through array
    fillLibrary();

    //reset form
    document.getElementById('form').reset();
};

//once submit button is pressed...
//1. create object with input from each field
//2. add that book to library array

var button = document.getElementById("btn");

button.addEventListener('click', addBookToLibrary);

//function that erases old divs

function clearCards() {
    const display = document.getElementById('book-display');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
}

//function that goes through array and makes a new library card for each object

function fillLibrary() {
    for(let i=0; i<myLibrary.length; i++){
        newLibraryCard(myLibrary[i]);
    }
};

//create new library card div

function newLibraryCard(item) {
    const bookDisplay = document.getElementById('book-display');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const finishedDiv = document.createElement('button');
    const removeBtn = document.createElement('button');

    //create div for whole book

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    //create divs for title, author, pages and finished
    //append divs to whole book div

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    if (item.finished === false) {
        finishedDiv.textContent = 'Not Read';
        finishedDiv.classList.add('notFinished');
    } else {
        finishedDiv.textContent = 'Read!';
        finishedDiv.classList.add('finished');
    };
    bookDiv.appendChild(finishedDiv);
//function for changing status to/from read
    finishedDiv.addEventListener('click', () => {
        if (finishedDiv.textContent === 'Read!') {
            finishedDiv.textContent = 'Not Read';
            finishedDiv.classList.remove('finished');
            finishedDiv.classList.add('notFinished');
        } else {
            finishedDiv.textContent = 'Read!';
            finishedDiv.classList.remove('notFinished');
            finishedDiv.classList.add('finished');
        }
    })

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', myLibrary.indexOf(item));
    removeBtn.classList.add('removeBtn');
    bookDiv.appendChild(removeBtn);
//function for removing book built into each library card
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        clearCards();
        fillLibrary();
    });

    bookDisplay.appendChild(bookDiv);
};

// finishedInput.setAttribute('type', 'radio');
// finishedInput.setAttribute('id', 'read');
// finishedInput.setAttribute('name', 'read');
// finishedDiv.appendChild(finishedInput);

// finishedLabel.textContent = 'Finished?';
// finishedLabel.setAttribute('for', 'read');
// bookDiv.appendChild(finishedLabel);