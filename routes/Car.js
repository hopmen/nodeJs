const {Router} = require('express');
const CarController = require('../controllers/Car');
const router = Router();

const carController = new CarController();

router.get('/cars/:id', carController.get);
router.get('/cars/:make/without-user/', carController.getCarsOfMakeWithoutUser);

router.post('/cars', carController.add);

router.put('/cars', carController.update);
router.put('/cars/:id/add-user', carController.addUser);

router.delete('/cars', carController.delete);

module.exports = router;
