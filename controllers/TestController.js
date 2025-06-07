const sendResponse = require('../utils/response');
const sendEmail = require('../services/EmailService')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const users = [
  { id: 1, name: "Alice Smith" },
  { id: 2, name: "Bob Johnson" },
  { id: 3, name: "Charlie Brown" },
];

exports.getUsers = (req, res) => {
  const search = req.query.search || "";

  const keywords = search.toLowerCase().split(',').map(s => s.trim());

  const filteredUsers = users.filter(user =>
    keywords.some(keyword => user.name.toLowerCase().includes(keyword))
  );

  res.json(filteredUsers);
};


exports.validation  = ('/validate', (req, res) => {
  const errors = validationResult(req);
    const data = req.body

  if (!errors.isEmpty()) {
     sendResponse(res , 400 ,errors.array(), false , data)
  }
  
  // Validation passed - your logic here
   sendResponse(res , 200 , "Validate Success " , true , data)
});

exports.getData = ('/'  , (req , res )=>{
    const data = req.body
    sendResponse(res , 200 , "Res from Router " , true , data)
})


exports.emailSend =('/email', async (req, res) => {
  const { to, subject, message , value } = req.body;
  try {
    await sendEmail({ to, subject, message, value });
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});


