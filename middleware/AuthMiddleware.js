const AuthMiddleware = (req, res, next) => {
  console.log('Middleware triggered');
  // You can modify req or res here if needed
  const data = req.body.data;
  if (!data) {
    return sendResponse(res, 403, 'Access denied by middleware', false);
  }
  next(); 
};
 
module.exports = AuthMiddleware