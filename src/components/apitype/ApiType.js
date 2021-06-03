import React from 'react';
import Card from '../card/Card';
import './apitype.styles.css';
import FetchApiCompoent from '../fetchapi/FetchApiComonent';

const ApiType = ({ data }) => {
	return (
		<div className='api_type'>
			<Card key={data._id} width='280px' headline={data.informationName}>
				<div className='container'>
					{data.data.map((item, idx) => (
						<FetchApiCompoent key={idx} dataToFetch={item.apiUrl} title={item.title} />
					))}
				</div>
			</Card>
		</div>
	);
};

export default ApiType;
