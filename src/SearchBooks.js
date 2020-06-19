import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

import BookGrid from "./BookGrid";
import * as BooksAPI from "./utils/BooksAPI";

class SearchBooks extends Component {
    state = {
        query: '',
        books: []
    };
    onChange = (query) => {
        this.setState(() => ({query}));
        clearTimeout(this.queryTimeOut);
        this.queryTimeOut = setTimeout(() => this.search(query.trim()), 750);
    };
    search = (query) => {
        query ? BooksAPI.search(query).then((ret) =>
            this.setState({books: ret.error ? [] : ret})
        ) : this.setState({books: []})
    };

    render() {
        const {shelves, onBookShelfChange} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={event => this.onChange(event.target.value)} type="text"
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid shelves={shelves} books={this.state.books} onBookShelfChange={onBookShelfChange}/>
                </div>
            </div>
        );
    }

}

SearchBooks.propTypes = {
    shelves: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
};

export default SearchBooks;