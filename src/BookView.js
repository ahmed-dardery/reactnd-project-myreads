import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const BookView = (props) => {
    const {shelf, onShelfChange, shelvesList} = props;
    const {title, authors} = props.book;
    const {imageLinks} = props.book;
    const thumbnail = imageLinks ? imageLinks.thumbnail.replace('http://','https://') : '';

    return (
        <div className="book">
            <div className="book-top">
                <Link to={{search: `?book=${props.book.id}`}}><div className="book-cover" style={{'backgroundImage': `url(${thumbnail})`}}/></Link>
                <BookShelfChanger shelvesList={shelvesList} selected={shelf || 'none'} onChange={onShelfChange}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.join(', ')}</div>
        </div>
    );
};

BookView.propTypes = {
    shelf: PropTypes.string,
    onShelfChange: PropTypes.func.isRequired,
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired
        })
    }).isRequired,
    shelvesList: PropTypes.array.isRequired
};

export default BookView;