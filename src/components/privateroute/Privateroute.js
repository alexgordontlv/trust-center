import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from '../../utilities/axios/axios';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
	const [state, setstate] = useState(null);

	const fetchData = async () => {
		const res = await axios.get(`centers/${'1234'}`);
		console.log(res.data);
		setstate(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (!state) {
					return <Redirect to='/error' />;
				}
				return <Component {...props} />;
			}}
		/>
	);
};
export default PrivateRoute;
