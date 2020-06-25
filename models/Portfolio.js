const { model, Schema } = require('mongoose')

const Portfolio = new Schema({
  header: String,
  textarea: String,
  image: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Portfolo', Portfolio)
