export const filterByUserName = (data, params) => {
	const response = data.filter(({username}) => username !== params);
	return response;
};
