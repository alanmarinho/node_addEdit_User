const { where } = require('sequelize');
const User = require('../model/user');

module.exports = class UserController {
  static newUser(req, res) {
    res.render('users/addUser');
  };

  static async saveUser(req, res) {
    const usuario = {
      name: req.body.name,
      age: req.body.age
    };
    await User.create(usuario);
    res.redirect('/allUsers');
  }

  static async editUser(req, res) {
    const id = req.body.id;
    console.log("ID: ",id);
    const user = await User.findOne({where:  {id: id }, raw: true});
    res.render('editUser', { user });
  }

  static async editUserSave(req, res) {
    const id = req.params.id;
    const user = {
      name: req.body.name,
      age: req.body.age
    };
    await User.update(user, {where: {id: id}})
      .then(res.redirect('/allUsers'))
      .catch(err =>{
        console.log(err);
      })
  }

  static async allUsers(req, res) {
    const users = await User.findAll({ raw: true });
    res.render('users/allUsers', { users });
  }

  static async home(req, res) {
    res.render('users/home');
  }

  static async logout(req, res) {
    res.render('logout');
  }

  static async login(req, res) {
    res.render('login');
  }

  static async loginUser(req, res) {
    res.redirect('/home');
  }

  static async editUser(req, res) {
    res.render('editUser')
  }

}