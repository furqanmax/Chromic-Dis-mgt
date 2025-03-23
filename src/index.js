require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoute = require('./routers/user-route');
const {mongodb} = require('./services/db-service');

const port = process.env.PORT || 5000;
const dburl = process.env.DB_URL || 'test';

mongodb(dburl).then(() => {
	console.log('mongodb connect!');
}).catch((e) => {
	console.log('mongodb failed!');
});

app.use(cors());
app.use(express.urlencoded());

app.use('/api/v1/user', userRoute);

app.listen(port, () => {
 console.log('server started');
});