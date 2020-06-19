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

    render() {
        return (

            <div className="app">
                <Route exact path="/" render={() => <Library books={this.state.books}/>}/>
                <Route path="/search" render={() => <SearchBooks/>}/>
            </div>
        )
    }
}

export default BooksApp
