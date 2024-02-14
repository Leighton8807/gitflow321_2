const bcrypt = require('bcryptjs');
const { userData } = require('../data/datas');

let register = async (req, res) => {
    const { id, name_user, name, email, password } = req.body;

    try {
        
        const hashedPassword = await bcrypt.hash(password, 10); // El segundo parámetro es el "salt"

        
        let valid = userData.addClient(id, name_user, name, email, hashedPassword);
        
        if (!valid) {
            return res.status(400).send({ status: 'Not registered' });
        } else {
            return res.status(200).send({ status: 'Registro completado' });
        }
    } catch (error) {
        console.error('Error al hashear la contraseña:', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
}

module.exports = { register };
