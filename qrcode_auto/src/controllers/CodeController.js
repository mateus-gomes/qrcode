const Codes = require('../models/Codes');

module.exports = {
    async returnCode(req,res){
        const codes = await Codes.findAll({
            limit: 1,
            order: [ [ 'id', 'DESC' ]]
          })
          if(codes.length == 0){
            console.log("Banco vazio");
            return res.json([]);
          }else{
            console.log("Retornando código: " + JSON.stringify(codes[0].code));
            return res.json(codes);
          }
    },

    async storeCode(req,res){
        const code = req.body.cod;
        console.log(code);
        Codes.destroy({
            truncate: true
          })
        const codes = await Codes.create({code});

        return res.json(codes);
    }
};