import React from 'react';
import PropTypes from 'prop-types';
import style from './button.less';

const Button = ({children, onClick}) => {
	return (<button onClick={onClick} className={style['button']}>
		{children}
	</button>)
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: () => {},
};

export default Button;