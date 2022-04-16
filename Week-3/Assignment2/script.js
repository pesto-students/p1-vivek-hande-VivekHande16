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

const book = kgf.book;

//Call
book.call(beast, 'Elon Musk', 3);
book.call(kgf, 'Bill Gates', 2);

//Apply
const bookArr = ['Jeff Bezoz', 4];
book.apply(kgf, bookArr);

//Bind
const mukesh = kgf.book.bind(beast);
mukesh('Mukesh Ambani', 6);

