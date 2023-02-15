const Chistes = require("../models/chistes.models");

const listarChistes = async (req,res)=>{

    const chistes = await Chistes.find();

    res.json({resultado:'OK',  chistes});
}

const crearChistes = async (req,res)=>{
    const chistesCreados = await Chistes.create(req.body);
    res.json({resultado:'OK', Chiste_nuevo:chistesCreados});

}
const actualizarChiste = async (req,res)=>{
    
    const chisteActualizado = await Chistes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json({resultado:'OK', Chiste_Actualizado:chisteActualizado, paametro: req.params.id});

}

const eliminarChiste = async (req,res)=>{
    
    const chisteEliminado = await Chistes.deleteOne({_id: req.params.id})
    res.json({resultado:'OK', Chiste_Eliminado:chisteEliminado, paametro: req.params.id});

}

const chisteRandom = async (req,res)=>{
    
    const chisteRandom = await Chistes.findOne({_id: req.params.id})
    res.json({resultado:'OK', Chiste_Random:chisteRandom, paametro: req.params.id});

}

module.exports = {
    listarChistes,
    crearChistes,
    actualizarChiste,
    eliminarChiste,
    chisteRandom
}