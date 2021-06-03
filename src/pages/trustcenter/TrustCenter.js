import React from 'react';
import { useQuery } from 'react-query';
import axios from '../../utilities/axios/axios';
import { Redirect } from 'react-router-dom';
import ComponentFilter from '../../components/componentFilter/ComponentFIlter';

import './trustcenter.styles.css';

const TrustCenter = ({ match }) => {
	const { centerId } = match.params;
	const { isLoading, error, data } = useQuery(
		'centerData',
		async () => {
			const { data } = await axios.get(`centers/${centerId}`);
			return data;
		},
		{
			retry: false,
			refetchInterval: 60000,
		}
	);
	console.log(data);
	if (isLoading) return 'Loading...';

	if (error) return <Redirect to='/error' />;

	return (
		<div className='trust_center'>
			<div className='trust_center_header'>
				<h1>{data.centerName}</h1>
			</div>
			<div className='trust_center_body'>
				{data.information.map((item) => (
					<ComponentFilter key={item._id} data={item} />
				))}
			</div>
		</div>
	);
};

export default TrustCenter;
