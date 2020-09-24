import axios from 'axios';

const URL = ``;


export const makePostReq = async (path, data) => {
	try {
		const response = await axios.post(URL + path, data);
		return response;
	} catch (err) {
		return err;
	}
};

export const makeGetReq = async (path) => {
	try {
		const response = await axios.get(URL + path);
		return response;
	} catch (err) {
		return err;
	}
};
