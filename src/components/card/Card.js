import React from 'react';
import './card.styles.css';
const Card = ({ children, width, headline }) => {
	return (
		<div className='card' style={{ width }}>
			<div className='card_header'>{headline}</div>
			<div className='card_body'>{children}</div>
		</div>
	);
};

export default Card;
