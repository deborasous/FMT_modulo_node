const {
  createTrainee,
  listTrainees,
} = require('../controllers/trainees.controller');
const { Router } = require('express');

class TraineeRouter {
  traineeFromRouter() {
    const traineeRoutes = Router();

    traineeRoutes.post('/criartrainee', createTrainee);
    traineeRoutes.get('/listatrainee', listTrainees);
    traineeRoutes.get('/listaumtrainee/:id', listOneTrainee);
    traineeRoutes.get('/atualizartrainee/:id', updateTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter().traineeFromRouter();
