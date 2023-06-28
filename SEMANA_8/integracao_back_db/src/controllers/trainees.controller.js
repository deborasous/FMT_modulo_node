const Trainees = require('../models/trainee');

class TraineeController {
  async createTrainee(req, res) {
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

    return res.status(201).send('Executando');
  }
}
module.exports = new TraineeController();
