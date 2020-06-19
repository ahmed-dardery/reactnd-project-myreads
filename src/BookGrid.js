import React, {Component} from 'react';
import BookBox from "./BookBox";

class BookGrid extends Component {
    render() {
        const {books, shelf, onBookShelfChange} = this.props;

        return (
            <ol className="books-grid">
                {books && books.map(book => <li key={book.id}>
                    <BookBox onShelfChange={(value) => {onBookShelfChange({id: book.id}, value)}} shelf={shelf}
                             book={book}/>
                </li>)}
            </ol>
        );

    }
}

export default BookGrid;