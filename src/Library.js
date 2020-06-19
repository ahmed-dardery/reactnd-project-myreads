import React, {Component} from 'react';
import {Link} from "react-router-dom";

import BookShelf from "./BookShelf";
import PropTypes from "prop-types";


class Library extends Component {
    shelves = [
        {
            shelfID: 'currentlyReading',
            shelfTitle: 'Currently Reading'
        },
        {
            shelfID: 'wantToRead',
            shelfTitle: 'Want to Reading'
        },
        {
            shelfID: 'read',
            shelfTitle: 'Read'
        }
    ];

    render() {
        const {books, onBookShelfChange} = this.props;
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {this.shelves.map(shelf => <BookShelf key={shelf.shelfID} onBookShelfChange={onBookShelfChange}
                                                          books={books} shelf={shelf}/>)}
                </div>
            </div>
            <div className="open-search">
                <Link className="open-search-button" to="/search">Add a book</Link>
            </div>
        </div>);
    }
}

Library.propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
};

export default Library;