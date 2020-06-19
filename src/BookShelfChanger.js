import React from 'react'
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {

    render() {
        const {selected, onChange, shelvesList} = this.props;
        const YES_MARK = '✔', NO_MARK = '　 ';
        return (
            <div className="book-shelf-changer">
                <select value={selected || "none"}
                        onChange={(event) => onChange(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {
                        shelvesList.map(shelf =>
                            <option key={shelf.shelfID} value={shelf.shelfID}>
                                {`${shelf.shelfID === selected ? YES_MARK : NO_MARK} ${shelf.shelfTitle}`}
                            </option>
                        )
                    }
                    <option value="none">{`${NO_MARK} None`}</option>
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