import axios from 'axios';

export default axios.create({
	baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://trust-center.herokuapp.com',
});
