const presidentsData = require('../data/presidents.json');

const presidents = (req, res) => {
    res.json(presidentsData);
};

module.exports = presidents;