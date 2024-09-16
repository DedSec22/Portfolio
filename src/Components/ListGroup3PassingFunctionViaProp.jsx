import { MouseEvent, useState } from "react";
import PropTypes from 'prop-types';

function ListGroup3(props) {
    // Destructure actual props
    const { items, heading, onSelectItem  } = props;
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group 2</h1>
            <h1>{heading}</h1>

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        id={'list-group-item-' + index}
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => { setSelectedIndex(index); onSelectItem(item); }}>{item}
                    </li>
                ))}
            </ul>
        </>
    );
}

// Define prop types for the component
ListGroup3.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading: PropTypes.string.isRequired,
};

export default ListGroup3;
