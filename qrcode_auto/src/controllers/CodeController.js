const Codes = require('../models/Codes');

module.exports = {
    async returnCode(req,res){
        const codes = await Codes.findAll({
            limit: 1,
            order: [ [ 'id', 'DESC' ]]
          })
        console.log("Retornando código: " + JSON.stringify(codes[0].code));
        return res.json(JSON.stringify(codes[0]));
    },

    async storeCode(req,res){
        const code = req.body.cod;
        console.log(code);
        const codes = await Codes.create({code});

        return res.json(codes);
    }
};