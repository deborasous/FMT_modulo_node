const { Roles } = require('../models/roles');

class Permission {
  async addOneRole(req, res) {
    try {
      const { description } = req.body;

      //validar de a description existe
      if (!description) {
        return res
          .status(400)
          .send({ message: 'Campo de descrição é obrigatório.' });
      }

      const role = await Roles.findOne({
        where: {
          description: description,
        },
      });

      if (role) {
        return res.status(400).send({ message: 'Função já criada.' });
      }

      const dataRole = await Roles.create({
        description,
      });

      return res.status(201).send(dataRole);
    } catch (error) {
      return res.status(500).send({
        message: 'Não foi possível criar função',
        cause: error.message,
      });
    }
  }

  async createOnePermission(req, res) {
    try {
      const { description } = req.body;

      // Validar se a descrição existe
      if (!description) {
        return res
          .status(400)
          .send({ message: 'Campo de descrição é obrigatório.' });
      }

      const permission = await Permission.findOne({
        where: {
          description: description,
        },
      });

      if (permission) {
        return res.status(400).send({ message: 'Permissão já criada.' });
      }

      const dataPermission = await Permission.create({
        description,
      });

      return res.status(201).send(dataPermission);
    } catch (error) {
      return res.status(500).send({
        message: 'Não foi possível criar permissão',
        cause: error.message,
      });
    }
  }

  async addPermissionRole(req, res) {
    try {
      const { permissionId, roleId } = req.body;

      if (!permissionId) {
        return res
          .status(400)
          .send({ message: 'O ID da permissão é obrigatório' });
      }

      if (!roleId) {
        return res
          .status(400)
          .send({ message: 'O ID da função é obrigatório' });
      }

      const role = await Roles.findOne({
        where: {
          id: roleId,
        },
      });

      if (!role) {
        return res.status(400).send({
          message: 'Nenhuma função encontrada',
        });
      }

      const permission = await Roles.findOne({
        where: {
          id: roleId,
        },
      });

      if (!permission) {
        return res.status(400).send({
          message: 'Nenhuma permissão encontrada',
        });
      }
      //fazer a relação de uma tabela com outra
      await role.addPermissions(permission);

      return res.status(201).send({
        message: 'Permissão atribuida a uma função',
      });
    } catch (error) {
      return res.status(500).send({
        message: 'A permissão não pode ser atribuida',
        cause: error.message,
      });
    }
  }

  async addroleToUser(req, res){
    try {
      const {userId, roleId}= req.body

      if (!userId) {
        return res.status(400).send({message:'O ID do usuário é obrigatório.'})
      }

      if (!roleId) {
        return res.status(400).send({message:'O ID da função é obrigatório.'})
      }

      const user = await Roles.findOne({
        where: {id: userId}
      })

      const role = await Roles.findOne({
        where: {id: roleId}
      })

      await user.addRoles(role)

      return res.status(201).send({
        message: 'Função adicionada ao usuário.',
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Não foi possivel atribuir a função ao usuário.',
        cause: error.message,
      });
    }
  }
}
module.exports = new Permission();
