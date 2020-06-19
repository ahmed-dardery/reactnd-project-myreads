import React, {Component} from 'react';
import BookGrid from './BookGrid'
import PropTypes from "prop-types";

class BookShelf extends Component {
    render() {
        const {shelf, books, onBookShelfChange} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BookGrid onBookShelfChange={onBookShelfChange} shelf={shelf.shelfID}
                              books={books.filter(book => book.shelf === shelf.shelfID)}/>
                </div>
            </div>
        );

    }
}

BookShelf.propTypes = {
    shelf: PropTypes.shape({
        shelfID: PropTypes.string,
        shelfTitle: PropTypes.string,
    }).isRequired,
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
};

export default BookShelf;