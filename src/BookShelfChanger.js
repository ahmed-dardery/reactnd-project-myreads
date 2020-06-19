import React from 'react'
import PropTypes from "prop-types";

const BookShelfChanger = (props) => (
    <div className="book-shelf-changer">
        <select value={props.selected || "none"} onChange={(event) => props.onChange(event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
);

BookShelfChanger.propTypes = {
    selected: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default BookShelfChanger;