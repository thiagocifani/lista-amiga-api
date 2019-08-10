const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../models/User');

class SessionController {
    async create(req, res, next) {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(500).json({ error: "Email ou senha inválidos" });
      } else {
        const match = await bcrypt.compare(req.body.password, user.password);
          if (match) {
            const token = jwt.sign({ id: user._id, email: user.email }, 'secret');
            return res.status(200).json({ token: token });
          } else {
            return res.status(401).json({ error: "Autenticação Falhou." });
          }
      }
    }

    async destroy(req, res) {
        const user = await User.findById(req.params.id).remove();
        return res.json(user);
    }
}

module.exports = new SessionController();