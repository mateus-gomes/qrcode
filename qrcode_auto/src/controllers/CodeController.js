const Codes = require('../models/Codes');

module.exports = {
    async returnCode(req,res){
        const codes = await Codes.findOne();
        console.log("Retornandooo" + JSON.stringify(codes.code));
        return res.json(JSON.stringify(codes.code));
    },

    async storeCode(req,res){
        const code = req.body.cod;
        console.log(code);
        const codes = await Codes.create({code});

        return res.json(codes);
    }
};