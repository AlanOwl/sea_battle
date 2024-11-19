const { Users } = require('../models/index.js');


exports.getMyStats = async (req, res) => {
	const login = req.session.user.login

	try {
		const obj = await Users.findOne({ where: { login } })
		let user = {
			ships_destroyed: obj.ships_destroyed,
			x4_cage: obj.x4_cage,
			x3_cage: obj.x3_cage,
			x2_cage: obj.x2_cage,
			x1_cage: obj.x1_cage,
			games_played: obj.games_played,
			winrate: obj.winrate,
		}
		return res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при получении статов' });
	}
};

exports.getBestPlayers = async (req, res) => {
	
	try {
		const user = await Users.findAll();
		return res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при получении заказов' });
	}
}


exports.putInfo = async (req, res) => {
	const login = req.session.user.login
	const { winrate, games_played, ships_destroyed, x1_cage, x2_cage, x3_cage, x4_cage } = req.body;
	const user = await Users.findOne({ where: { login } })

	let new_winrate = user.winrate + winrate
	let new_games_played = user.games_played + games_played
	let new_ships_destroyed = user.ships_destroyed + ships_destroyed
	let new_x1_cage = user.x1_cage + x1_cage
	let new_x2_cage = user.x2_cage + x2_cage
	let new_x3_cage = user.x3_cage + x3_cage
	let new_x4_cage = user.x4_cage + x4_cage
	try {
		user.winrate = new_winrate
		user.games_played = new_games_played
		user.ships_destroyed = new_ships_destroyed
		user.x1_cage = new_x1_cage
		user.x2_cage = new_x2_cage
		user.x3_cage = new_x3_cage
		user.x4_cage = new_x4_cage
		await user.save();
		return res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при обновлении заказа' });
	}
};

exports.createUser = async (req, res) => {
	try {
		const { login, password } = req.body;
		const user = await Users.create({ login, password })
		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при создании сотрудника' });
	}
};


exports.auth = async (req, res) => {
	const { login, password } = req.body
	try {
		const user = await Users.findOne({ where: { login } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		req.session.user = { id: user.id, login: user.login, password: user.password }
		req.session.isAuthendicated = true;
		req.session.save(err => {
			if (err) {
				throw err
			}
			return res.status(201).json({ message: 'Successful login attempt' });
		})
	} catch (e) {
		console.error(e);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}