import React from 'react';
import BookView from "./BookView";
import PropTypes from "prop-types";
import LoadingIcon from "./LoadingIcon";

const BookGrid = (props) => {
    const {shelf, shelves, onBookShelfChange, shelvesList, customEmptyMessage, loading} = props;

    let SortedBooks = props.books || [];
    SortedBooks.sort((a, b) => a.title.localeCompare(b.title));

    if (loading)
        return <LoadingIcon/>;
    else
        return (
            <ol className="books-grid">
                {SortedBooks.length === 0 ?
                    <div className="books-grid-empty">{customEmptyMessage || `Phew, looks a bit too empty!`}</div> :
                    SortedBooks.map(book =>
                        <li key={book.id}>
                            <BookView shelvesList={shelvesList} onShelfChange={(value) => onBookShelfChange(book, value)}
                                      shelf={shelf || shelves[book.id]}
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
    shelvesList: PropTypes.array.isRequired,
    customEmptyMessage: PropTypes.string,
};
export default BookGrid;