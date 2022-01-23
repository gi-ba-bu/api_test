//https://stackoverflow.com/questions/8834126/

let isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

module.exports = {isObject};
