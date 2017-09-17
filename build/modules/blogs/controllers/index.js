'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBlog = getAllBlog;
exports.addBlog = addBlog;
exports.getBlog = getBlog;

var _index = require('../models/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * get blogs
 */
function getAllBlog(req, res, next) {
  _index2.default.find({
    status: 'Active'
  }).sort({
    createdAt: -1
  }).populate('_createdBy').exec(function (err, blogs) {
    if (err) return next(err);
    console.log('getAllBlog(blogs): ', blogs);
    return res.status(200).json({
      success: true,
      message: 'Get all blog',
      data: blogs
    });
  });
}

/**
 * add blog
 */
function addBlog(req, res, next) {
  console.log('addBlog(req.body): ', req.body);
  var newBlog = new _index2.default();
  Object.assign(newBlog, req.body, {
    _createdBy: req.authUser._id
  });
  console.log('addBlog(newBlog): ', newBlog);
  newBlog.save(function (err, blog) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created blog!',
      data: blog
    });
  });
}

/**
 * get blog
 */
function getBlog(req, res, next) {
  _index2.default.findById(req.params._id).populate('_createdBy').exec(function (err, blog) {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get blog',
      data: blog
    });
  });
}
//# sourceMappingURL=index.js.map