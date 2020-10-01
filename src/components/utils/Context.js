import {createContext, useContext} from 'react';

export const Context = createContext();

export function useAppContext() {
	return useContext(Context);
}
