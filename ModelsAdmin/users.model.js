const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')



const role=["admin","client"]
const schemaUser = new mongoose.Schema({
    nom: {type:String},
    email: {type:String},
    numeroTel: {type:String},
    domaine: {type:Schema.Types.ObjectId,ref:'domaines'},
    type_Entreprise: {type:Schema.Types.ObjectId,ref:'types'},
    adresse: {type:String},
    password: {type:String},
    profileImg: {type:String},
    score: {type:Number},
    remise: {type:Number},
    nbTransaction: {type:Number},
    statut: {type:Boolean},
    rating: {type:Number},
    abonnement:{type:Schema.Types.ObjectId,ref:'abonnements'},
    role:{type:role,required:true}
})

const Users=new mongoose.model('members',schemaUser)

module.exports.Users=Users