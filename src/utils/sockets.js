import io from 'socket.io-client';
import {config} from './constants';

export default io(config.API_URL);
