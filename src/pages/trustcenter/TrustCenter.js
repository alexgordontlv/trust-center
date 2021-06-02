import React from 'react';
import { useQuery } from 'react-query';
import axios from '../../utilities/axios/axios';
import { Redirect } from 'react-router-dom';

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

	return <div>THIS IS A TRUST CENTnER</div>;
};

export default TrustCenter;
