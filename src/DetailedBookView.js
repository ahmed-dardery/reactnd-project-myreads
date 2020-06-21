import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from "./utils/BooksAPI";
import LoadingIcon from "./LoadingIcon";

class DetailedBookView extends React.Component {
    state = {
        book: {},
        loading: true
    };

    componentDidMount() {
        const {bookID} = this.props;
        BooksAPI.get(bookID).then((book) => {
            this.setState({book, loading: false});
        }).catch(() => this.props.goBack());
    }

    render() {
        const {goBack} = this.props;
        const {book, loading} = this.state;

        const {imageLinks} = book;
        const thumbnail = imageLinks ? imageLinks.thumbnail.replace('http://', 'https://') : '';
        return (
            <div>
                <div onClick={() => goBack()} className="book-details-background"/>
                <div className="book-details-box">
                    {loading ?   <div className="book-details"><LoadingIcon/></div> :
                        <div className="book-details">
                            <div className="book-details-top">
                                <div className="book-top">
                                    <div className="book-cover"
                                         style={{'backgroundImage': `url(${thumbnail})`}}/>
                                </div>
                                <div className="book-details-info">
                                    <b><div className="book-title">{book.title}</div></b>
                                    <div className="book-subtitle">{book.subtitle}</div>
                                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                                    {book.categories && <div className="book-title">Category: {book.categories.join(', ')}</div>}
                                    {book.averageRating && <div className="book-title">Rating: {`${book.averageRating} stars - ${book.ratingsCount} rating(s)`}</div>}
                                    {book.pageCount && <div className="book-title">{book.pageCount} Pages</div>}
                                </div>
                            </div>
                            {book.description && <div>
                                <h2>Description</h2>
                                {book.description};
                            </div>}

                        </div>
                    }
                </div>
            </div>
        );
    }
}

DetailedBookView.propTypes = {
    goBack: PropTypes.func.isRequired,
    bookID: PropTypes.string.isRequired,
};
export default DetailedBookView;