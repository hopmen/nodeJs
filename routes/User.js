const {Router} = require('express');
const UserController = require('../controllers/User');
const router = Router();

const userController = new UserController();

router.get('/users/:id/cars/', userController.getCars);//
router.get('/users/without-cars', userController.getUsersWithoutCars);//
router.get('/users/all', userController.getAll);//
router.get('/users/:id', userController.get);//

router.post('/users', userController.add);//

router.put('/users/:id/add/cars', userController.addCars);//
router.put('/users/:id', userController.update);//

router.delete('/users/:id', userController.delete);//

module.exports = router;
