import React from 'react';
import Card from '../card/Card';
import certificationStlyes from './certification.types';
import './certifications.styles.css';

const Certifications = ({ data }) => {
	return (
		<Card width='1000px' headline={data.informationName} className='certifications'>
			{data.data.map((item, idx) => {
				if (item.status) {
					return <img key={idx} loading='lazy' alt={item.title} src={certificationStlyes[item.title]} width='100' height='100' />;
				}
			})}
		</Card>
	);
};

export default Certifications;
