const {
  createTrainee,
  listTrainees,
  listOneTrainee,
  updateTrainee,
} = require('../controllers/trainees.controller');
const { Router } = require('express');

class TraineeRouter {
  traineeFromRouter() {
    const traineeRoutes = Router();

    traineeRoutes.post('/criartrainee', createTrainee);
    traineeRoutes.get('/listatrainee', listTrainees);
    traineeRoutes.get('/listaumtrainee/:id', listOneTrainee);
    traineeRoutes.put('/atualizartrainee/:id', updateTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter().traineeFromRouter();
