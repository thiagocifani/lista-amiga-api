var jwt = require('jsonwebtoken');

const checkToken = function(req, res, next) {
  try {
    let token = req.headers['authorization'];

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    var decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch(err) {
  return res.status(401).json({ error: 'Autenticação Falhou' });
  }
}

module.exports = { checkToken: checkToken }