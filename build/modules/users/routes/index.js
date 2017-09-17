'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _verifyToken = require('../../auth/middlewares/verifyToken.js');

var _index = require('../controllers/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRoutes = _express2.default.Router();

userRoutes.route('/').get(_index.getAllUser).post(_verifyToken.verifyToken, _index.addUser);

userRoutes.route('/:_id').get(_index.getUser);

exports.default = userRoutes;
//# sourceMappingURL=index.js.map