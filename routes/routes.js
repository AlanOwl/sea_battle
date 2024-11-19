const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')
const controller = require('../controller/controller.js')

//страницы

router.get('/signup',  function (req, res) {
	res.render('signup')
});

router.get('/signin', function (req, res) {
	res.render('signin')
});

router.get('/', auth, function (req, res) {
	res.render('main-page')
});

router.get('/myStats', auth,function (req, res) {
	res.render('myStats')
});

router.get('/bestPlayers', auth, function (req, res) {
	res.render('bestPlayers')
});

// запросы

router.get('/getMyStats', controller.getMyStats)

router.get('/getBestPlayers', controller.getBestPlayers)

router.put('/putInfo', controller.putInfo)


//авторизация

router.post('/signin', controller.auth)

router.post('/signup', controller.createUser)

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/signin#signin')
	})
});





module.exports = router