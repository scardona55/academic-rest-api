/** Dto */
const facultDto = require("../model/dto/facult.dto");
const config = require("config");

exports.createFacult = (req, res, next) => {
    let facult = {
        code: req.body.code,
        name: req.body.name,
        namedean: req.body.namedean
    };
    facultDto.create(facult, (err, data)=> {
        if (err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updateFacult = (req, res, next) => {
    let facult = {
        code: req.body.code,
        name: req.body.name,
        namedean: req.body.namedean
    };
    facultDto.update({_id: req.body.id}, facult, (err, data)=> {
        if (err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
            info: data
        }
        );
    });     
};

exports.getAll = (req, res, next) => {
    
    facultDto.getAll({}, (err, data)=> {
        if (err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
            res.status(200).json({
                info: data
            })
    });
};

exports.getByCode = (req, res, next) => {
    
    periodDto.getByCode({code: req.params.code}, (err, data)=> {
        if (err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
            res.status(200).json({
                info: data
            })
    });
};

exports.deleteFacult = () =>{
    facultDto.delete({_id: req.body.id}, (err, data)=> {
        if (err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
            res.status(204).json()
    });

}