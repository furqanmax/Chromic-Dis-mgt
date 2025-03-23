const express = require('express');
const cors = require('cors');
const app = express();
// const userRoute = require('./')

app.use(cors());
app.use(express.urlencoded());

app.get('/', (req, res) => {
	res.end('hello');
});

app.listen(5000, () => {
 console.log('server started ');
});
