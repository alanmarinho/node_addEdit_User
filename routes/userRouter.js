const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.get('/add', UserController.newUser);
router.post('/add', UserController.saveUser);

router.get('/editUser/:id', UserController.editUser);
router.post('/editUser/', UserController.editUserSave);

router.get('/allUsers', UserController.allUsers);
//

router.get('/', UserController.home);
//

router.get('/home', UserController.home);
//

router.get('/logout', UserController.logout)
//

router.get('/login', UserController.login);
router.post('/login', UserController.loginUser);

module.exports = router;