import {toast} from 'react-toastify';

const showToast = (type, message) => {
	switch (type) {
		case 'ok':
			return toast.success(message, {
				closeOnClick: true,
			});
		case 'error':
			return toast.error(message, {
				closeOnClick: true,
			});
		default:
			return toast('', {
				closeOnClick: true,
			});
	}
};

export default showToast;
