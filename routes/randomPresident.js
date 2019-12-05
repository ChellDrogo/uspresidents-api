const presidentsData = require('../data/presidents.json');

const randomPresident = (req, res) => {
    let r = Math.floor(Math.random() * (presidentsData.length + 1));
    
    res.json(presidentsData[r]);
};

module.exports = randomPresident;