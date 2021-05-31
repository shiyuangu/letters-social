import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import { navigate } from '../../history';

/**
 * Link component helps you navigate around the app
 * @method      Link
 * @param       {object} props
 * @constructor
 */
function Link(props) {
    const { to, children } = props;
    //sgu: Children.only verifies only one children; 
    //cloneElement modifies this child (since we cannot change the child directly) 
    return cloneElement(Children.only(children), {
        onClick: () => navigate(to)
    });
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

export default Link;
