import React from 'react';
import './style.scss';
const Button = ({
	handleClick,
	buttonText
}) => {
	return (
		<button onClick={handleClick} className='button-status'>
			{buttonText}
		</button>
	);
};

export default Button;