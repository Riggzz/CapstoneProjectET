const images = require('./db.json')

module.exports = {
 getImages: (req, res) => res.status(200).send(images)
}