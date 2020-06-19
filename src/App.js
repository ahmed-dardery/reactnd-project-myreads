import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

import Library from "./Library";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            console.log(books);
            this.setState({books})
        });
    }

    onBookShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
            () => this.setState(prevState => ({
                books: prevState.books.map(v => v.id === book.id ? {...v, shelf} : v)
            }))
        );
    };

    render() {
        return (

            <div className="app">
                <Route exact path="/"
                       render={() => <Library onBookShelfChange={this.onBookShelfChange} books={this.state.books}/>}/>
                <Route path="/search" render={() => <SearchBooks onBookShelfChange={this.onBookShelfChange}/>}/>
            </div>
        )
    }
}

export default BooksApp
