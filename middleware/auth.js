module.exports = function (req,res,next) {
	if (!req.session.isAuthendicated) {
		return res.redirect('/signin')
	}

	next()
}