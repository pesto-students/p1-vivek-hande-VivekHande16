const kgf = {
    movie: 'KGF Chapter 2',
    imdbRating: 9.8,
    bookings: [],

    book(name, ticketCount) {
        console.log(`${name} booked ${ticketCount} tickets of movie ${this.movie}`);

        this.bookings.push({
            movie:this.movie,
            bookedBy: name,
            tickets: ticketCount
        })
    }
}

const beast = {
    movie: 'Beast',
    imdbRating: 7.2,
    bookings: [],
}

/* Storing the book() method of kgf object in book variable so that any object can use the method */
const book = kgf.book;

//Call
/* The call method binds the 'this' keyword to the beast object so that beast object can use the book() method */
book.call(beast, 'Elon Musk', 3);
book.call(kgf, 'Bill Gates', 2);

//Apply
/* Apply accepts only the array as argument, so need to convert arguments into array */
const bookArr = ['Jeff Bezoz', 4];
/* Apply binds 'this' keyword to the book object so that kgf object can use the book() method */
book.apply(kgf, bookArr);

//Bind
/* The Bind() method is used to call a function with the 'this' value, this keyword refers to the same object(kgf) which is currently selected. 
bind() method allows us to easily set which object will be bound by the this keyword when a function or method is invoked. */
const mukesh = kgf.book.bind(beast);
mukesh('Mukesh Ambani', 6);

