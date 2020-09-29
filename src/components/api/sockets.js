import io from 'socket.io-client';
// import {URL} from './index'
const URL = 'http://localhost:5000/';

export const socket = io(URL);
