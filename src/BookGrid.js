import React, {Component} from 'react';
import BookBox from "./BookBox";

class BookGrid extends Component {
    render() {
        const {books, shelf, shelves, onBookShelfChange} = this.props;

        return (
            <ol className="books-grid">
                {books && books.map(book => <li key={book.id}>
                    <BookBox onShelfChange={(value) => {onBookShelfChange(book, value)}} shelf={shelf || shelves[book.id]}
                             book={book}/>
                </li>)}
            </ol>
        );

    }
}

export default BookGrid;