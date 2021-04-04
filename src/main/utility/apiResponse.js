exports.successResponse = function (res, msg) {
	const data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

exports.successResponseWithData = function (res, data) {
	const resData = {
		status: 1,
		success:true,
		data: data
	};
	return res.status(200).json(resData);
};

exports.errorResponse = function (res, msg) {
	const data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data)
};

exports.notFoundResponse = function (res, msg) {
	const data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	const resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.validationErrorOnly = function (res, msg) {
	let resData = {
		status: 0,
		success:false,
		error: msg
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	const data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};