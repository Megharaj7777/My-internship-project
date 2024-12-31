const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/login', (req, res)=>{
    res.send('logged in');
});
router.post('/signup', (req, res)=>{
    res.send('Signed up');
});
module.exports = router;