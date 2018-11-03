
function myFunction() {
    let h = window.innerHeight;
    let w = window.innerWidth;
    console.log(h);
    console.log(w);
    document.body.style.backgroundImage = "url('tuxedo.jpg')";
    document.body.style.backgroundSize = "cover";

}

myFunction();

// first thing first is to get a list of books

function Book (title, author, pages, photos, timeofday, description) {
  this.title = title;
  this.author = author;
  this.pages = pages
  this.photos = ('');
  this.timeofday = timeofday;
  this.description = description;
}


var Book1 = new Book ('Incredible Journey','Anne B. Gatto',200,true,'day','they used many animals to film the three animals.');
var Book2 = new Book ('Dog Day Afternoon for Cats','Al Pacino',300,false,'afternoon','Dogs take Cats hostage in a bank');
var Book3 = new Book ('Day of the Triffidds','Creep Vinely',20,true,'day','Everyone escapes to the Isle of Wight, until someone points out that there are other islands out there.');
var Book4 = new Book ('Polar Bears','Mr White',288,false,'night','');
var Book5 = new Book ('See Urchins','Nancy Prickly',40,true,'night','');
var Book6 = new Book ('War and Peace','Nick Tolstoy',40,true,'night','it is long and takes even longer to finish');
var Book7 = new Book ('Horse Whisperer','Nick Sparks',410,true,'day','');
var Book8 = new Book ('Free Willy','Unknown',420,true,'day',' Whale of a story.');
var Book9 = new Book ('Seal Island','Nick Stormsly',340,true,'day',' Not sure if cats know much about seals.');
var Book10 = new Book ('The Shining','Stephen King',540,false,'afternoon','description: basically, you do not want to work in a haunted hotel in the middle of winter.');

const booklist = [Book1,Book2,Book3,Book4,Book5,Book6,Book7,Book8,Book9,Book10];


// as cats are bad at choosing books, a random number will make the choice of the book for them:

let rn = Math.random();
if (rn < 0.1) {
  book = Book1
} else if (rn >= 0.0 && rn < 0.1) {
  book = Book2
} else if (rn >= 0.1 && rn < 0.2) {
  book = Book2
} else if (rn >= 0.2 && rn < 0.3) {
  book = Book3
} else if (rn >= 0.3 && rn < 0.4) {
  book = Book4
} else if (rn >= 0.4 && rn < 0.5) {
  book = Book5
} else if (rn >= 0.5 && rn < 0.6) {
  book = Book6
} else if (rn >= 0.6 && rn < 0.7) {
  book = Book7
} else if (rn >= 0.7 && rn < 0.8) {
  book = Book8
} else if (rn >= 0.8 && rn < 0.9) {
  book = Book9
} else if (rn >= 0.9 && rn < 1) {
  book = Book10
}


function showAllBooks() {

    const book = booklist.map((book) => {
    return book.title + ' by ' + book.author + ', (' + book.pages + ' pages)' + '  ';
    });

    var elTitle = document.getElementById('booklist');
    elTitle.innerHTML = book;

}

// we want to know the time of day.  that lets us know which type of book to read

function booksbyTime() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  $('footer#footerdate').text(`The time is: ${hours}:${minutes}`);
    if (hours < 12 && hours >= 0) {
      msg = 'The time is: ' + hours + '\:'+ minutes +'. Suggested reading:';
      list = book.title + ' by ' + book.author + ' ' + book.description ;

      if (book.timeofday == 'day') {
        msg2 = 'good book for daytime reading'
      } else {
        msg2 = 'this is better for daytime reading and it is not daytime'
      }


    } else if (hours >= 12 && hours < 18) {
      msg = 'The time is: ' + hours + '\:'+ minutes +'. Suggested reading:';
      list = book.title + ' by ' + book.author + ' ' + book.description;

      if (book.timeofday == 'afternoon') {
        msg2 = 'A good book for afternoon reading'
      } else {
        msg2 = 'Not recommended for afternoon reading'
      }


    } else {
      msg = 'The time is: ' + hours + '\:'+ minutes +' . Suggested reading:';
      list = book.title + ' by ' + book.author + ' ' + book.description;

      if (book.timeofday == 'night') {
        msg2 = 'A good book for night reading'
      } else {
        msg2 = 'As it is night time you may wish to choose something less scary'
      }

    }
    var elBooks = document.getElementById('listofbooks');
    elBooks.innerHTML = msg;

    var elTitle = document.getElementById('booklist');
    elTitle.innerHTML = list + ', ' + msg2;

}

// hides the reload button until after you have made a choice.

function showReloadButton() {
  $('button#reload').css({
    'visibility': 'visible',
  });
}


// the user picks a cat.  It doesn't matter which, all cats can read:


$('#tabby').on('click', function (){
  $(this).text('Suggested Books for Tabby Cats');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tuxedo').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
        showReloadButton();
  })



$('#tortoiseshell').on('click', function (){
  $(this).text('Information on Tortoiseshell');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tabby').hide();
    $('#marmalade').hide();
    $('#tuxedo').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
        showReloadButton();
})



$('#marmalade').on('click', function (){
  $(this).text('Suggested Books for Marmalade');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#tabby').hide();
    $('#tuxedo').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
        showReloadButton();
})


$('#tuxedo').on('click', function (){
  $(this).text('Suggested Books for Tuxedo');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tabby').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
        showReloadButton();
})


$('#fancy').on('click', function (){
  $(this).text('All Books');
  // list all books using the object book.
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tuxedo').hide();
    $('#tabby').hide();

        showAllBooks();
        showReloadButton();

})

// the reload button
$('#reload').on('click', function (){
  location.reload();
})
