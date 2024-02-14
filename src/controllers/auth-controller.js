const bcrypt = require('bcryptjs');
const signingKey = require('../config/keys');
const generateToken = require('../helpers/generator-token');

let auth = async (req, res) => {
    try {
        let { email, password, rol } = req.body;

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Email", email);
        console.log("Password", hashedPassword);

        // Generar el token
        let token = generateToken(
            { email: email, rol: rol },
            signingKey.SIGNING_KEY_TOKEN,
            new Date().getTime() + (100 * 60 * 1000)
        );

        // Configuración de la cookie
        let cookieConfig = {
            domain: 'localhost',
            path: '/refresh',
            secure: false,
            expires: new Date(Date.now() + 300000),
            httpOnly: true,
            signed: true
        };

        // Configuración de la respuesta
        let responseConfig = {
            status: 'Successful authentication',
            token: token
        };

        // Configurar la cookie y enviar la respuesta
        return res.status(200).cookie('refresh_token', email, cookieConfig).json(responseConfig);
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    auth
}
