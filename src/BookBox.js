import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

const BookBox = (props) => {
    const {shelf, onShelfChange} = props;
    const {title, authors} = props.book;
    const {thumbnail} = props.book.imageLinks;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 200, 'backgroundImage': `url(${thumbnail})`}}/>
                <BookShelfChanger selected={shelf || 'none'} onChange={onShelfChange}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.join(', ')}</div>
        </div>
    );
};

BookBox.propTypes = {
    shelf: PropTypes.string,
    onShelfChange: PropTypes.func.isRequired,
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default BookBox;