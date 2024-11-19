module.exports = function (req,res,next) {
	res.locals.isAuth = req.session.isAuthendicated
	// res.locals.isA = req.session.isAdmin
	// res.locals.isW = req.session.isWaiter
	
	next()
}