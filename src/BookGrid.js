import React, {Component} from 'react';
import BookBox from "./BookBox";

class BookGrid extends Component {
    render() {
        const {books, shelf} = this.props;

        return (
            <ol className="books-grid">
                {books && books.map(book => <li key={book.id}><BookBox shelf={shelf} book={book}/></li>)}
            </ol>
        );

    }
}

export default BookGrid;