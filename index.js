const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const AuthMiddleware = require('./middleware/AuthMiddleware')
const sendResponse = require('./utils/response');
const TestRoute = require ("./routes/TestRoute")

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

// setInterval(() => {
//   console.log(`Ma Nway Nway Hlaing Ko Chit Tal <3`);
// }, 2000);

// Route with middleware 
app.use('/users', TestRoute);
app.get('/', AuthMiddleware, (req, res) => {
    const data = req.body;
    sendResponse(res , 200 , 'Data get success!', true , data)
});