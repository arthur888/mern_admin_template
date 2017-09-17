'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a blogSchema
var blogSchema = exports.blogSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required.']
  },
  description: {
    type: String,
    required: [true, 'Blog description is required.']
  },
  category: {
    type: String
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  },
  _createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Blog created by is required.']
  },
  createdAt: Date,
  updatedAt: Date
}, { versionKey: false });

/*
 * userSchema middlewares
 */

// on every save, add the date
blogSchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updatedAt = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }

  next();
});

// the schema is useless so far
// we need to create a model using it
var Blog = _mongoose2.default.model('Blog', blogSchema);

// make this available to our users in our Node applications
exports.default = Blog;
//# sourceMappingURL=index.js.map