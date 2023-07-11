const { UserRoles } = require('../models/user_roles');

async function checkUserRole(req, res, next) {
  //obter o cargo a partir do token
  const userId = req.user.id;
  const roleId = 1;

  try {
    const userRole = await UserRoles.findOne({
      where: {
        user_id: userId,
        role_id: roleId,
      },
    });

    if (userRole) {
      next();
    } else {
      res.status(401).json({
        message: 'Acesso não autorizado',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao verificar as permissões do usuário.',
      error: error.message,
    });
  }
}

module.exports = {
  checkUserRole,
};
