import axios from 'axios';
import {config} from '../../constants';

const token = localStorage.getItem('tokens') ? localStorage.getItem('tokens') : '';

const reqConfig = {
	headers: {Authorization: token},
};

export const makePostReq = async (path, data) => {
	try {
		const response = await axios.post(config.API_URL + path, data, reqConfig);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

export const makeGetReq = async (path) => {
	try {
		const response = await axios.get(config.API_URL + path, reqConfig);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
