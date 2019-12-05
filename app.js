const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index');

app.use('/v1', routes);
app.use(express.static(__dirname + '/images'));

app.use((req, res) => {
    res.status(404)
        .send('Nothing to see here');
  });

app.listen(PORT, () =>{
    console.log(`Server running on Port ${PORT}`);
});