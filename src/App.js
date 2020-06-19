import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI'

import Library from "./Library";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
    state = {
        books: [],
        shelves: [],
        shelvesList: [
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
        ]
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }

    onBookShelfChange = (book, shelf) => {
        book.shelf = shelf;

        this.setState(prevState => {
            let cur = prevState.books.find(v => v.id === book.id);
            if (cur) {
                cur.shelf = shelf;
                return prevState;
            } else
                return {books: [...prevState.books, book]};
        });
        BooksAPI.update(book, shelf);
    };

    render() {
        return (

            <div className="app">
                <Route exact path="/"
                       render={() =>
                           <Library shelvesList={this.state.shelvesList} onBookShelfChange={this.onBookShelfChange} books={this.state.books}/>
                       }/>
                <Route path="/search"
                       render={() =>
                           <SearchBooks shelvesList={this.state.shelvesList} shelves={
                               this.state.books.reduce((acc, cur) => ({...acc, [cur.id]: cur.shelf}), {})
                           } onBookShelfChange={this.onBookShelfChange}/>
                       }/>
            </div>
        )
    }
}

export default BooksApp
