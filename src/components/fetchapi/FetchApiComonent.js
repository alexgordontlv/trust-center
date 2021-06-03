import React, { useState, useEffect } from 'react';
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
export default FetchApiCompoent;
