import React from 'react';
import BookBox from "./BookBox";
import PropTypes from "prop-types";

const BookGrid = (props) => {
    const {shelf, shelves, onBookShelfChange, shelvesList} = props;

    let SortedBooks = props.books || [];
    SortedBooks.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <ol className="books-grid">
            {SortedBooks && SortedBooks.map(book =>
                <li key={book.id}>
                    <BookBox shelvesList = {shelvesList} onShelfChange={(value) => onBookShelfChange(book, value)} shelf={shelf || shelves[book.id]}
                             book={book}/>
                </li>
            )}
        </ol>
    );
};

BookGrid.propTypes = {
    books: PropTypes.array,
    onBookShelfChange: PropTypes.func.isRequired,
    shelf: PropTypes.string,
    shelves: PropTypes.object,
    shelvesList: PropTypes.array.isRequired
};
export default BookGrid;