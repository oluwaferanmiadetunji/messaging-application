import React, {useState, createContext, useEffect} from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

const Provider = (props) => {
	const [isLogged, setIsLogged] = useState(false);
	const [userData, setUserData] = useState({});

	let authenticated;
	const token = localStorage.Token;
	if (token) {
		const decodedToken = jwtDecode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			authenticated = false;
		} else {
			authenticated = true;
		}
	}

	return <AuthContext.Provider value={{isLogged, userData}}>{props.children}</AuthContext.Provider>;
};

const Consumer = AuthContext.Consumer;

export {Provider, Consumer};
