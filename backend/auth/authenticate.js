const jwt = require('jsonwebtoken');
module.exports = function(req, res, next) {
    const token = req.get('Authorization');
    if(!token) return res.status(401).send({ 'message': 'Not Authorized' })
    const decode = jwt.decode(token);
    if(!decode || !decode['user']) return res.status(401).send({ 'message': 'Not Authorized' })
    req.user = decode['user'];
    next();
}