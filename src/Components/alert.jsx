import {ReactNode, React} from 'react';
import PropTypes from 'prop-types';

// Alert Component
const Alert = (props) => {
  return (
    <div className="alert alert-primary">
      {props.children}
    </div>
  );
};

export default Alert;
