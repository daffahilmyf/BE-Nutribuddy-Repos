require('dotenv').config({path: '../../.env'})
const jwt = require('jsonwebtoken');
const MessageResponse = require('../../Utils/Response/response.js');

function VerifyToken(req, res, next){
  const authHeader = req.headers.authorization || req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization']

  if (!authHeader) {
    
    return MessageResponse(res, 403, 'A token is required for authentication')
  }

  try{

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;

  }catch(err) {
    return MessageResponse(res, 401, 'Invalid Token')
  }

  return next()
};


function GenerateAccessToken(user){

  return jwt.sign({user}, process.env.TOKEN_KEY, { expiresIn: '1h' })
  
}


module.exports =  {VerifyToken, GenerateAccessToken }