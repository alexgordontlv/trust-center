import React from 'react';
import Certifications from '..//certifications/Certifications';
import BooleanType from '../booleantype/BooleanType';
import ApiType from '../apitype/ApiType';
const ComponentFilter = ({ data }) => {
	const typeSettings = (data) => ({
		certifications: <Certifications data={data} />,
		boolean: <BooleanType data={data} />,
		api: <ApiType data={data} />,
	});

	return <div>{typeSettings(data)[data.infoType]}</div>;
};

export default ComponentFilter;
