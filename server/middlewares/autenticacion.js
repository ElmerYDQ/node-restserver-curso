const jwt = require('jsonwebtoken');

//verificar token
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        
        if(err) {
            return res.status(401).json({
                ok: false,
                err: 'token no valido'
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

}

//verificar admin role
let verificaAdminRole = (req, res, next) => {
    
    let usuario = req.usuario;

    if(usuario.role != 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'el usuario no es administrador'
            }
        });
    }

    next();
}

module.exports = {
    verificaToken,
    verificaAdminRole
}