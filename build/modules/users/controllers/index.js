'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.getUser = getUser;

var _index = require('../models/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * get users
 */
function getAllUser(req, res, next) {
  _index2.default.find({
    status: 'Active'
  }).sort({
    createdAt: -1
  }).exec(function (err, users) {
    if (err) return next(err);
    console.log('getAllUser(users): ', users);
    return res.status(200).json({
      success: true,
      message: 'Get all user',
      data: users
    });
  });
}

/**
 * add user
 */
function addUser(req, res, next) {
  console.log('addUser(req.body): ', req.body);
  var newUser = new _index2.default();
  Object.assign(newUser, req.body, {
    password: newUser.generateHash(req.body.password)
  });
  console.log('addUser(newUser): ', newUser);
  newUser.save(function (err, user) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created user!',
      data: user
    });
  });
}

/**
 * get user
 */
function getUser(req, res, next) {
  _index2.default.findById(req.params._id).exec(function (err, user) {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get user',
      data: user
    });
  });
}
//# sourceMappingURL=index.js.map