const { Companies } = require('../models/companies');

class CompaniesController {
  async createCompany(req, res) {
    try {
      const existingCompany = await Companies.findOne({
        where: { cnpj: req.body.cnpj },
      });
      if (existingCompany) {
        return res.status(400).json({ error: 'CNPJ already exists' });
      }

      const {
        cnpj,
        companyName,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rhAnalystName,
        supervisorName,
        createdAt,
        updatedAt,
      } = req.body;

      const dataCompany = await Companies.create({
        cnpj,
        companyName,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rhAnalystName,
        supervisorName,
        createdAt,
        updatedAt,
      });

      return res.status(201).send(dataCompany);
    } catch (error) {
      return res.status(500).send({
        error: 'Falha ao cadastrar empresa.',
      });
    }
  }

  async listCompanies(req, res) {
    try {
      const companyData = await Companies.findAll(
        // fazer um select de algum campo, trás somente os campos de cnpj e nome da empresa
        { attributes: ['cnpj', 'companyName'] }
      );
      return res.status(200).send(companyData);
    } catch (error) {
      return res.status(500).json({
        error: 'Falha ao buscar empresa ',
      });
    }
  }

  async listOneCompany(req, res) {
    try {
      const { id } = req.params;

      const companyData = await Companies.findByPk(id);
      if (!companyData) {
        return res.status(404).json({
          error: 'Empresa não encontrada',
        });
      }
      return res.status(200).send(companyData);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar empresa' });
    }
  }

  async updateCompany(req, res) {
    try {
      const { id } = req.params;

      const companyData = await Companies.findByPk(id);
      //verificar se existe a empresa
      if (!companyData) {
        return res.status(404).json({
          error: 'Empresa não encontrada',
        });
      }

      //verificar se o CNPJ já está sendo usado em outra empresa
      if (req.body.cnpj && req.body.cnpj !== companyData.cnpj) {
        const existCompany = await Companies.findOne({
          where: { cnpj: req.body.cnpj },
        });
        if (existCompany) {
          return res.status(400).json({
            error: 'CNPJ já cadastrado',
          });
        }
      }

      //atualizar as informacoes da empresa
      await companyData.update(req.body);
      return res.state(500).json({
        error: 'Falha ao atualizar a empresa',
      });
    } catch (error) {}
  }
}

module.exports = new CompaniesController();
