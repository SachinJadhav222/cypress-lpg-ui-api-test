require('dotenv').config();

const getEnvVeriables=function (value){
    return process.env[value]

}
module.exports={
    getEnvVeriables
}