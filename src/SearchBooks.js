import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookGrid from "./BookGrid";

class SearchBooks extends Component {

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid/>
                </div>
            </div>
        );
    }

}

export default SearchBooks;