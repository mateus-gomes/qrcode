const Codes = require('../models/Codes');

module.exports = {
    async index(req,res){
        const codes = await Codes.findOne();

        return res.json(codes);
    },

    async storeCode(req,res){
        const code = req.body.cod;
        console.log(code);
        const codes = await Codes.create({code});

        return res.json(codes);
    }
};