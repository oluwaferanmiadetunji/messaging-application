import axios from 'axios';

const token = localStorage.getItem('tokens') ? localStorage.getItem('tokens') : '';

// export const URL = `https://mensaje-app.herokuapp.com/`;
export const URL = `http://localhost:5000/`;

const config = {
	headers: {Authorization: token},
};

export const makePostReq = async (path, data) => {
	try {
		const response = await axios.post(URL + path, data, config);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

export const makeGetReq = async (path) => {
	try {
		const response = await axios.get(URL + path, config);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
