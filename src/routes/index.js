const userController = require('../controllers/userController');

const routes = [
    {
        method: 'GET',
        url: '/api/finduser/:email',
        handler: userController.searchUser
    },
    {
        method: 'POST',
        url: '/api/signup',
        handler: userController.signUp
    },
    {
        method: 'POST',
        url: '/api/login',
        handler: userController.signIn
    }
];


module.exports = routes;