const prod = {
	API_URL: 'https://mensaje-app.herokuapp.com/',
};

const dev = {
	API_URL: 'http://localhost:5000/',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
