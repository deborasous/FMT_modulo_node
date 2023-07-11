const jwt = require('jsonwebtoken');
require('dotenv').config();

//meddleware para verificar o token JWT
function verifyToken(requiredPermission) {
  return function (req, res, next) {
    const token = req.headers.authorization;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userPermissions = decoded.roles[0].permissions;

        if (
          userPermissions.some(
            (permission) => permission.description === requiredPermission
          )
        ) {
          next();
        } else {
          // O usuário não tem a permissão necessária, retorne acesso não autorizado
          res.status(401).json({
            message: 'Acesso não autorizado.',
          });
        }
      } catch (error) {}
      return res.status(401).json({
        message: 'Token inválido ou expirado.',
      });
    } else {
      res.status(401).json({
        message: 'Token não fornecido.',
      });
    }
  };
}
module.exports = {
  verifyToken,
};
