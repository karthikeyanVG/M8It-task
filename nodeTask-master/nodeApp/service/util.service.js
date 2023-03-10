

module.exports.ReE = function (res, err, code) { // Error Web Response

    let errorCode = err.code

    if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, error: err, code: errorCode });
};

module.exports.ReS = function (res, data, code) { // Success Web Response

    let send_data = { success: true };

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data);//merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

module.exports.isNull = (field) => {
    return typeof field === 'undefined' || field === '' || field === null
}

module.exports.isEmpty = (obj) => {
    return !Object.keys(obj).length > 0;
}

module.exports.TE = function (err_message, log) {
    if (log === true) {
        console.error(err_message);
    }

    throw new Error(err_message);
};
