import React, {Component} from 'react';
import BookShelf from "./BookShelf";



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
        const {books} = this.props;
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {this.shelves.map(shelf => <BookShelf key={shelf.shelfID} books={books} shelf={shelf}/>)}
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
            </div>
        </div>);
    }
}

export default Library;