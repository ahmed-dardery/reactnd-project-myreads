import React from 'react';
import BookShelfChanger from "./BookShelfChanger";

const BookBox = (props) => {
    const {shelf, onShelfChange} = props;
    const {title, authors} = props.book;
    const {thumbnail} = props.book.imageLinks;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 200, 'backgroundImage': `url(${thumbnail})`}}/>
                <BookShelfChanger selected={shelf} onChange={onShelfChange}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors&&authors.join(', ')}</div>
        </div>
    );
};

export default BookBox;