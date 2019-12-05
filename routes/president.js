const presidentsData = require('../data/presidents.json');

const president = (req, res) => {
    const {presidentID} = req.params;
    const presidentIDInt = (presidentID - 1);
    
    res.json(presidentsData[presidentIDInt]);
}

module.exports = president;