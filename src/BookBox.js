import React from 'react';
import BookShelfChanger from "./BookShelfChanger";

const BookBox = (props) => {
    const {shelf} = props;
    const {title, authors} = props.book;
    const {thumbnail} = props.book.imageLinks;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{'backgroundImage': thumbnail}}/>
                <BookShelfChanger selected={shelf}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(', ')}</div>
        </div>
    );
};

export default BookBox;