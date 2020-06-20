import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

import BookGrid from "./BookGrid";
import * as BooksAPI from "./utils/BooksAPI";

class SearchBooks extends Component {
    state = {
        query: '',
        books: [],
        loading: false
    };
    onChange = (query) => {
        this.setState(() => ({query, loading: true}));
        clearTimeout(this.queryTimeOut);
        this.queryTimeOut = setTimeout(() => this.search(query.trim()), 500);
    };
    search = (query) => {
        query ? BooksAPI.search(query).then((ret) =>
            this.setState({books: ret.error ? [] : ret, loading: false})
        ) : this.setState({books: [], loading: false})
    };

    render() {
        const {shelves, onBookShelfChange, shelvesList} = this.props;

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
                    <BookGrid loading = {this.state.loading} customEmptyMessage={!this.state.loading && this.state.query.trim().length===0?" ":"No books found!"} shelvesList ={shelvesList} shelves={shelves} books={this.state.books} onBookShelfChange={onBookShelfChange}/>
                </div>
            </div>
        );
    }

}

SearchBooks.propTypes = {
    shelves: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
    shelvesList: PropTypes.array.isRequired

};

export default SearchBooks;