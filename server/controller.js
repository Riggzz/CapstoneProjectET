const people = require('./dbname.json')
let globalId = 2

module.exports = {
    createVictim: (req, res) => {
        let { first_name, last_name, phone_number } = req.body
        let newVictim = {
            id: globalId,
            first_name,
            last_name,
            phone_number
        }
        people.push(newVictim)
        res.status(200).send(people)
        globalId++
    }
}