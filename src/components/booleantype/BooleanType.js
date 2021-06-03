import React from 'react';
import { GiCrossMark, GiCheckMark } from 'react-icons/gi';
import Card from '../card/Card';
import './booleantype.styles.css';
const BooleanType = ({ data }) => {
	return (
		<div className='boolean_type'>
			<Card key={data._id} width='280px' headline={data.informationName}>
				{data.data.map((item, idx) => {
					console.log(item);
					return (
						<div className='boolean_container' key={idx}>
							<p>{`${item.title}`}</p>
							<p> {item.status ? <GiCheckMark style={{ color: 'green' }} /> : <GiCrossMark style={{ color: 'red' }} />}</p>
						</div>
					);
				})}
			</Card>
		</div>
	);
};

export default BooleanType;
