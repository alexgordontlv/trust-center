import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './apitype.styles.css';
import { useQuery } from 'react-query';
import axios from 'axios';

const FetchApiCompoent = ({ dataToFetch, title }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(dataToFetch);
			setFetchedData(JSON.stringify(data));
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) return 'Loading...';
	return (
		<div>
			<p>{title}</p>
			{isLoading ? 'Loading' : fetchedData}
		</div>
	);
};

const ApiType = ({ data }) => {
	console.log('API', data);
	return (
		<div className='api_type'>
			<Card key={data._id} width='280px' headline={data.informationName}>
				<div className='container'>
					{data.data.map((item, idx) => (
						<FetchApiCompoent key={idx} id={item._id} dataToFetch={item.apiUrl} title={item.title} />
					))}
				</div>
			</Card>
		</div>
	);
};

export default ApiType;
