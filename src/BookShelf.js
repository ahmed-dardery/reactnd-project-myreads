import React, {Component} from 'react';
import BookGrid from './BookGrid'

class BookShelf extends Component {
    render() {
        const {shelf, books, onBookShelfChange} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BookGrid onBookShelfChange={onBookShelfChange} shelf = {shelf.shelfID} books={books.filter(book => book.shelf === shelf.shelfID)}/>
                </div>
            </div>
        );

    }
}

export default BookShelf;