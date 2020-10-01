const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tawnhallSchema = new Schema({
    _userId: { 
        type: Schema.Types.ObjectId,
        ref : 'User', 
        required: true,
    },
    tawnhallName : { type: String, required: true},
    invadecooldown : { type: String, max : 240},
    health: {type: Number},
    gold : {type: Number},
    meat: {type: Number},
    energy : {type: Number, max: 50},
});

tawnhallSchema.pre('save', (next)=>{
    Tawnhall.findOne({tawnhallName: this.tawnhallName})
    .then((tawnhallName)=>{
        if(tawnhallName) next({ name: 'ALREADY_EXISTS'});
        else{next()}
    })
    .catch((err)=>{
        next({name: 'Error'})
    })
})

const Tawnhall = mongoose.model('Tawnhall', tawnhallSchema);

module.exports = Tawnhall;