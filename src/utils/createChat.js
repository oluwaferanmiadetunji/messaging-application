export default (sender, recipient) => {
	if (sender < recipient) {
		return `${sender}-${recipient}`;
	} else {
		return `${recipient}-${sender}`;
	}
};
