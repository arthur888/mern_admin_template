'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _verifyToken = require('../../auth/middlewares/verifyToken.js');

var _index = require('../controllers/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blogRoutes = _express2.default.Router();

blogRoutes.route('/').get(_index.getAllBlog).post(_verifyToken.verifyToken, _index.addBlog);

blogRoutes.route('/:_id').get(_index.getBlog);

exports.default = blogRoutes;
//# sourceMappingURL=index.js.map