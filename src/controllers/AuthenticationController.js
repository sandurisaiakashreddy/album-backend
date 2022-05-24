const {User} = require('../models')
const config = require('../config/config')
module.exports = {
    async register(req, res) {
       try{
        const user =  await User.create(req.body)
        const output  = user.toJSON();
        res.send({
            user: output,
                 })
       }
       catch(err){
           res.status(400).send({
               error: 'Email already exists...'
           })
       }
    },
}
