// first thing first is to get a list of books

function Book (title, author, pages, photos, timeofday) {
  this.title = title;
  this.author = author;
  this.pages = pages
  this.photos = ('');
  this.timeofday = ('');
}


var Book1 = new Book ('Incredible Journey','Anne B. Gatto',200,true,'day');
var Book2 = new Book ('Dog Day Afternoon for Cats','Al Pacino',300,false,'afternoon');
var Book3 = new Book ('Day of the Triffidds','Creep Vinely',20,true,'day');
var Book4 = new Book ('Polar Bears','Mr White',288,false,'night');
var Book5 = new Book ('See Urchins','Nancy Prickly',40,true,'night');
var Book6 = new Book ('War and Peace','Nick Tolstoy',40,true,'night');
var Book7 = new Book ('Horse Whisperer','Nick Sparks',410,true,'day');
var Book8 = new Book ('Free Willy','Unknown',420,true,'day');
var Book9 = new Book ('Seal Island','Nick Stormsly',340,true,'day');
var Book10 = new Book ('Otter Beach','Sue Swinner',140,false,'afternoon');


// as cats are bad at choosing, a random number will make the choice of the book for them:

let rn = Math.random();
let book = '';

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

// we want to know the time of day.  that lets us know which type of book to read

function booksbyTime() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  $('footer#footerdate').text(`The time is: ${hours}:${minutes}`);
    if (hours < 12) {
      msg = 'Good day time reading examples';
      list = book.title + ' by ' + book.author;

      if (book.timeofday == 'day') {
        msg2 = 'good book for daytime reading'
      } else {
        msg2 = 'this is better for daytime reading and it is not daytime'
      }



    } else if (hours >= 12 && hours < 18) {
      msg = 'Good books to read in the afternoon:';
      list = book.title + ' by ' + book.author;

      if (book.timeofday == 'afternoon') {
        msg2 = 'good book for afternoon  reading'
      } else {
        msg2 = 'choose again!'
      }


    } else {
      msg = 'Night time books to read';
      list = book.title + ' by ' + book.author;

      console.log(book.timeofday);

      if (book.timeofday == 'night') {
        msg2 = 'good book for night'
      } else {
        msg2 = 'choose again!'
      }

    }
    var elBooks = document.getElementById('listofbooks');
    elBooks.innerHTML = msg;

    var elTitle = document.getElementById('booklist');
    elTitle.innerHTML = list + ', ' + msg2;
}

// the user picks a cat.  It doesn't matter which, all cats can read:

$('#tabby').on('click', function (){
  $(this).text('Information on Tabby Cats');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tuxedo').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
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
})



$('#marmalade').on('click', function (){
  $(this).text('Information on Marmalade');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#tabby').hide();
    $('#tuxedo').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
})


$('#tuxedo').on('click', function (){
  $(this).text('Information on Tuxedo');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tabby').hide();
    $('#fancy').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
})


$('#fancy').on('click', function (){
  $(this).text('Information on Fancy');
  // here we are hiding the other cat types at they are no longer of interest
    $('#tortoiseshell').hide();
    $('#marmalade').hide();
    $('#tuxedo').hide();
    $('#tabby').hide();
  // we call the function that presents us with different books based on the time of day
        booksbyTime();
})



$('#reload').on('click', function (){
  location.reload();
})
