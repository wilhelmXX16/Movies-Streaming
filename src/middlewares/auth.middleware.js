
const { ExtractJwt, Strategy } = require('passport-jwt')

const passport = require('passport')

const { findUserById } = require('../users/users.controllers')
//*const {secretOrKey} = require('../../config')
const config = require('../../config').api
 
//? Generamos configuraciones basicas para manejar passport con jwt
const passportConfigs = {
    //? Esta configuracion lo que hace es extraer el Bearer Token de mi peticion
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //? 
    secretOrKey: config.secretOrKey  //*secretOrKey: secretOrKey
}


//? done()
passport.use(new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
        .then(data => {
            if(data){
               done(null, tokenDecoded) //? El usuario si Existe y es valido
            } else {
               done(null, false, {message: 'Token Incorrect'}) //? El usuario no existe
            }
        })
        .catch(err => {
            done(err, false) //? Error en la base de datos
        })
}))

module.exports = passport.authenticate('jwt', {session: false})