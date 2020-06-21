import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI'

import Library from "./Library";
import SearchBooks from "./SearchBooks";
import DetailedBookView from "./DetailedBookView";

class BooksApp extends React.Component {
    state = {
        loading: true,
        books: [],
        shelves: [],
        shelvesList: [
            {
                shelfID: 'currentlyReading',
                shelfTitle: 'Currently Reading'
            },
            {
                shelfID: 'wantToRead',
                shelfTitle: 'Want to Read'
            },
            {
                shelfID: 'read',
                shelfTitle: 'Read'
            },
            /*{
                shelfID: 'favorite',
                shelfTitle: 'Favorites'
            },*/
            {
                shelfID: 'none',
                shelfTitle: 'None',
                system: true,
            }
        ]
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books, loading: false})
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
                <Route render={({history, location}) => {
                    const test = new URLSearchParams(location.search);
                    const query = test.get("book");
                    return query && <DetailedBookView goBack={()=>history.push(location.pathname)} bookID={query}/>;
                }}/>
                <Switch>
                    <Route exact path="/"
                           render={({location, history}) =>
                               <Library history={history} query={location.search} loading={this.state.loading}
                                        shelvesList={this.state.shelvesList}
                                        onBookShelfChange={this.onBookShelfChange} books={this.state.books}/>
                           }>
                    </Route>
                    <Route exact path="/search"
                           render={() =>
                               <SearchBooks shelvesList={this.state.shelvesList} shelves={
                                   this.state.books.reduce((acc, cur) => ({...acc, [cur.id]: cur.shelf}), {})
                               } onBookShelfChange={this.onBookShelfChange}/>
                           }/>
                    <Route render={() => <div>404 Page Not Found!</div>}/>
                </Switch>

            </div>
        )
    }
}

export default BooksApp
