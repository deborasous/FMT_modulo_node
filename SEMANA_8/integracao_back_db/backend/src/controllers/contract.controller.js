const { Contract } = require('../models/contract');
const { Trainees } = require('../models/trainee');
const { Companies } = require('../models/companies');
const { Category } = require('../models/category');

class ContractController {
  async createContract(req, res) {
    try {
      const {
        traineeId,
        categoryId,
        companyId,
        startValidity,
        endValidity,
        status,
        remuneration,
        extra,
      } = req.body;

      const dataContract = await Contract.create({
        traineeId,
        categoryId,
        companyId,
        startValidity,
        endValidity,
        status,
        remuneration,
        extra,
      });

      return res
        .status(201)
        .send({ message: 'Contrato criado com sucesso!', dataContract });
    } catch (error) {
      return res.status(400).send({
        message: 'Não foi possível criar um contrato.',
        cause: error.message,
      });
    }
  }

  async listContracts(req, res) {
    try {
      const dataContract = await Contract.findAll({
        include: [
          {
            model: Trainees,
            attributes: ['name', 'email', 'primaryPhoneContact'],
          },
          {
            model: Companies,
            attributes: ['companyName', 'supervisorName'],
          },
          {
            model: Category,
            attributes: ['name'],
          },
        ],
        order: [['id', 'ASC']],
      });

      console.log(dataContract, 'teste');

      /**/
      const result = dataContract.map((item) => {
        const { Trainee, Company, Category, ...rest } = item.toJSON();
        return {
          ...rest,
          traineeName: Trainee.name,
          traineeEmail: Trainee.email,
          primaryPhoneContact: Trainee.primaryPhoneContact,
          companyName: Company.companyName,
          supervisorName: Company.supervisorName,
          categoryName: Category.name,
        };
      });

      const total = await Contract.count();

      return res.status(200).send({
        records: result,
        total,
      });
    } catch (error) {
      return res.status(400).send({
        message: 'Não foi possivel listar os contratos.',
        cause: error.message,
      });
    }
  }

  async listOneContract(req, res) {
    const { id } = req.params;
    try {
      const contractData = await Contract.findOne({
        where: { id },
        include: [
          {
            model: Trainees,
            attributes: [
              'name',
              'email',
              'rg',
              'cpf',
              'primaryPhoneContact',
              'dateBirth',
              'fatherName',
              'motherName',
              'haveSpecialNeeds',
            ],
          },
          {
            model: Companies,
            attributes: ['companyName', 'supervisorName'],
          },
          {
            model: Category,
            attributes: ['name'],
          },
        ],
      });

      if (!contractData) {
        return res.status(404).send({
          message: 'Contrato não encontrado.',
        });
      }

      return res.status(200).send(contractData);
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Erro ao buscar contrato.', cause: error.message });
    }
  }

  async deactivateContract(req, res) {
    const { id } = req.params;

    try {
      const contractData = await Contract.findOne({
        where: { id },
      });

      if (!contractData) {
        return res.status(404).send({
          message: 'Contrato não encontrado.',
          cause: error.message,
        });
      }

      if (!contractData.status) {
        return res.status(400).send({
          message: 'Este contrato está inativo e não pode ser reativado.',
        });
      }

      // definir o status do contrato como false para desativa-lo
      contractData.status = false;

      //salva as alterações no banco de dados
      await contractData.save();

      return res.status(200).send({
        message: 'Contrato desativado com sucesso!',
        contractData,
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Erro ao desativar contrato.',
        cause: error.message,
      });
    }
  }
}

module.exports = new ContractController();
