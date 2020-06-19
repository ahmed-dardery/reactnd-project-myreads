import React from 'react'
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {

    render() {
        const {onChange, shelvesList} = this.props;
        let {selected} = this.props;
        selected = selected || 'none';
        const YES_MARK = '✔', NO_MARK = '　 ';
        return (
            <div className="book-shelf-changer">
                <select value={selected}
                        onChange={(event) => onChange(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {
                        shelvesList.map(shelf =>
                            <option key={shelf.shelfID} value={shelf.shelfID}>
                                {`${shelf.shelfID === selected ? YES_MARK : NO_MARK} ${shelf.shelfTitle}`}
                            </option>
                        )
                    }
                </select>
            </div>
        );
    }
}

BookShelfChanger.propTypes = {
    selected: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    shelvesList: PropTypes.array.isRequired
};

export default BookShelfChanger;