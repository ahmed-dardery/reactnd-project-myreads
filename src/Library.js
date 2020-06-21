import React, {Component} from 'react';
import {Link} from "react-router-dom";

import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class Library extends Component {

    render() {
        const {books, onBookShelfChange, shelvesList, loading} = this.props;
        return (<div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelvesList.map(shelf => !shelf.system && !shelf.hidden &&
                            <BookShelf loading={loading} shelvesList={shelvesList} key={shelf.shelfID}
                                       onBookShelfChange={onBookShelfChange}
                                       books={books} shelf={shelf}/>)}
                    </div>
                </div>
                <div className="open-search">
                    <Link className="open-search-button" to="/search">Add a book</Link>
                </div>
            </div>
        </div>);
    }
}

Library.propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
    shelvesList: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    query: PropTypes.string,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Library;