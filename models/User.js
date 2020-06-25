const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  username: String,
  portfolios: [{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
