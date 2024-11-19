const link = document.querySelector('.best')
const percent = document.querySelectorAll('.percent')
const first = document.querySelectorAll('.first span')
const second = document.querySelectorAll('.second span')
const third = document.querySelectorAll('.third span')
const fourth = document.querySelectorAll('.fourth span')

link.innerHTML = '<a href="/bestPlayers" class="info-link" style="color: aqua;"> <img src = "img/list.svg" alt = "" class="info-img"> <span>Best players</span> </a>'


async function getStats() {
	const responce = await fetch('/getBestPlayers')
	const data = await responce.json()
	data.sort((a, b) => a.winrate > b.winrate ? -1 : 1);

	if (data[0]) {
			let user1 = {
		player: data[0].login,
		winrate: data[0].winrate,
		game_count: data[0].games_played,
	}
	const values1 = Object.values(user1);
	first.forEach(function (elem, index) {
		elem.innerHTML = values1[index]
	})
		percent[0].classList.add("active");
	}



if (data[1]) {
		let user2 = {
		player: data[1].login,
		winrate: data[1].winrate,
		game_count: data[1].games_played,
	}
	const values2 = Object.values(user2);
	second.forEach(function (elem, index) {
		elem.innerHTML = values2[index]

	})
	percent[1].classList.add("active");
}


if (data[2]) {
		let user3 = {
		player: data[2].login,
		winrate: data[2].winrate,
		game_count: data[2].games_played,
	}
	const values3 = Object.values(user3);
	third.forEach(function (elem, index) {
		elem.innerHTML = values3[index]

	})
	percent[2].classList.add("active");
}


if (data[3]) {
		let user4 = {
		player: data[3].login,
		winrate: data[3].winrate,
		game_count: data[3].games_played,
	}
	const values4 = Object.values(user4);
	fourth.forEach(function (elem, index) {
		elem.innerHTML = values4[index]
	})
	percent[3].classList.add("active");
}

}

getStats()