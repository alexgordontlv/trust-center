import React from 'react';
import Card from '../../components/card/Card';
import './error.styles.css';
const Error = () => {
	return (
		<div className='error'>
			<Card width='1000px' headline='Error Page'>
				<h3>This is an error page, maybe the vendor Url does not exists yet</h3>
			</Card>
		</div>
	);
};

export default Error;
