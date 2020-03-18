import React from 'react';
import style from './button.less';

const Button = ({children, onClick}) => {
	return (<button onClick={onClick} className={style['button']}>
		{children}
	</button>)
};

export default Button;