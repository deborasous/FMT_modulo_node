const { Trainees } = require('../models/trainee');

class TraineeController {
  async createTrainee(req, res) {
    try {
      const {
        name,
        email,
        rg,
        cpf,
        primaryPhoneContact,
        secondaryPhoneContact,
        dateBirth,
        fatherName,
        motherName,
        haveSpecialNeeds,
      } = req.body;

      const dataTrainees = await Trainees.create({
        name,
        email,
        rg,
        cpf,
        primaryPhoneContact,
        secondaryPhoneContact,
        dateBirth,
        fatherName,
        motherName,
        haveSpecialNeeds,
      });

      return res.status(201).send(dataTrainees);
    } catch (error) {
      return res.status(400).send({
        message: 'Não foi possível criar um registro de estágiario',
        cause: error.message,
      });
    }
  }

  async listTrainees(req, res) {
    const dataTrainee = await Trainees.findAll();

    return res.status(200).send(dataTrainee);
  }
}
module.exports = new TraineeController();
