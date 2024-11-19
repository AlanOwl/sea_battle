const link = document.querySelector('.game')
const comp_field = document.querySelectorAll('.field-computer div')
const human_field_arr = document.querySelectorAll('.field-human div')
const human_field = document.querySelector('.field-human')
const btn = document.querySelector('.main-field__btn-place')
const btn_play = document.querySelector('.main-field__btn')
let arr = Array.from(comp_field)
let arr2 = Array.from(human_field_arr)
const one_ship = document.querySelector('.number1xForBlue')
const two_ship = document.querySelector('.number2xForBlue')
const three_ship = document.querySelector('.number3xForBlue')
const four_ship = document.querySelector('.number4xForBlue')
const ships = document.querySelector('.main-filed__ships-wrapper')
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")
link.innerHTML = '<a href="/" class="info-link" style="color: aqua;"> <img src = "img/game.svg" alt = "" class="info-img"> <span>Game</span> </a>'
let flagInstall = false;
let pare_count = 0;
let napravlenie = 0;
let current = 0;
let ready = false
let a = 0
const arr_coor = []
let count_ships = 10;
let shipsObj = {
	four_ship: 1,
	three_ship: 2,
	two_ship: 3,
	one_ship: 4,
};


function first_fase() {
	btn.addEventListener("click", function (event) {

		human_field_arr.forEach(element => {
			element.style.cssText = 'background-color: #d5e8e6'
		});
		let data_ship = 0
		function checklastShips(data_ship) {
			switch (data_ship) {
				case 4:
					shipsObj.four_ship--
					count_ships--
					break;
				case 3:
					shipsObj.three_ship--
					count_ships--
					break;
				case 2:
					shipsObj.two_ship--
					count_ships--
					break;
				case 1:
					shipsObj.one_ship--
					count_ships--
					break;
				// default:
				// 	break;
			}
			current--;
		}
		function checkVertical(firstCoord, last_Coord, data_ship, miny) {
			let index_col_first = 0;
			let index_row_first = 0;
			let index_col_second = 0;
			let index_row_second = 0;
			const rows = 12;
			const cols = 12;
			const field = [];

			Array2 = toMatrix(arr2)
			new_arr = toMatrix(arr2)
			for (let i = 0; i < 10; i++) {
				for (let j = 0; j < 10; j++) {
					new_arr[i][j] = Array2[i][j].id
				}
			}

			for (let i = 0; i < rows; i++) {
				const row = [];
				for (let j = 0; j < cols; j++) {
					row.push(0);
				}
				field.push(row);
			}

			for (let i = 1; i < rows - 1; i++) {
				for (let j = 1; j < cols - 1; j++) {
					if (Array2[i - 1][j - 1].classList.contains('ship')) {
						field[i][j] = 1
					}
				}

			}


			for (let i = 0; i < 10; i++) {

				if (new_arr[i].indexOf(firstCoord.toString()) !== -1) {
					index_col_first = new_arr[i].indexOf(firstCoord.toString())
					index_row_first = i
					break
				}

			}
			for (let i = 0; i < 10; i++) {

				if (new_arr[i].indexOf(last_Coord.toString()) !== -1) {
					index_col_second = new_arr[i].indexOf(last_Coord.toString())
					index_row_second = i
					break
				}

			}


			if ((Math.abs(index_row_second - index_row_first)) !== data_ship - 1) return false

			// console.log("1")

			if (miny) {
				// console.log(miny)
				if (((index_row_first + data_ship) > 10)) return false
				for (let a = 0; a < data_ship; a++, index_row_first++) {
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (field[index_row_first + i + 1][index_col_first + j + 1] === 1) {
								return false
							}
						}
					}
				}
			} else {
				// console.log(miny)
				if ((index_row_first - data_ship) < -1) return false
				for (let a = 0; a < data_ship; a++, index_row_first--) {
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (field[index_row_first + i + 1][index_col_first + j + 1] === 1) {
								return false
							}
						}
					}
				}
			}
			// console.log("2")
			if ((firstCoord % 10) !== (last_Coord % 10)) return false
			// console.log("3")
			return true

		}
		function checkHorizontal(firstCoord, last_Coord, data_ship, plsx) {
			let index_col_first = 0;
			let index_row_first = 0;
			let index_col_second = 0;
			let index_row_second = 0;
			const rows = 12;
			const cols = 12;
			const field = [];

			Array2 = toMatrix(arr2)
			new_arr = toMatrix(arr2)
			for (let i = 0; i < 10; i++) {
				for (let j = 0; j < 10; j++) {
					new_arr[i][j] = Array2[i][j].id
				}
			}

			for (let i = 0; i < rows; i++) {
				const row = [];
				for (let j = 0; j < cols; j++) {
					row.push(0);
				}
				field.push(row);
			}

			for (let i = 1; i < rows - 1; i++) {
				for (let j = 1; j < cols - 1; j++) {
					if (Array2[i - 1][j - 1].classList.contains('ship')) {
						field[i][j] = 1
					}
				}

			}


			for (let i = 0; i < 10; i++) {

				if (new_arr[i].indexOf(firstCoord.toString()) !== -1) {
					index_col_first = new_arr[i].indexOf(firstCoord.toString())
					index_row_first = i
					break
				}

			}
			for (let i = 0; i < 10; i++) {

				if (new_arr[i].indexOf(last_Coord.toString()) !== -1) {
					index_col_second = new_arr[i].indexOf(last_Coord.toString())
					index_row_second = i
					break
				}

			}

			if ((Math.abs(index_col_second - index_col_first)) !== data_ship - 1) return false

			if (plsx) {

				if (((index_col_first + data_ship) > 10)) return false
				for (let a = 0; a < data_ship; a++, index_col_first++) {
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (field[index_row_first + i + 1][index_col_first + j + 1] === 1) {
								return false
							}
						}
					}
				}
			} else {

				if ((index_col_first - data_ship) < -1) return false
				for (let a = 0; a < data_ship; a++, index_col_first--) {
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (field[index_row_first + i + 1][index_col_first + j + 1] === 1) {
								return false
							}
						}
					}
				}
			}

			if ((Math.floor(firstCoord / 10)) !== (Math.floor(last_Coord / 10))) return false
			return true
		}
		function checkOne(firstCoord, data_ship) {
			let index_col_first = 0;
			let index_row_first = 0;


			const rows = 12;
			const cols = 12;
			const field = [];
			Array2 = toMatrix(arr2)
			new_arr = toMatrix(arr2)
			for (let i = 0; i < 10; i++) {
				for (let j = 0; j < 10; j++) {
					new_arr[i][j] = Array2[i][j].id
				}
			}

			for (let i = 0; i < rows; i++) {
				const row = [];
				for (let j = 0; j < cols; j++) {
					row.push(0);
				}
				field.push(row);
			}
			for (let i = 1; i < rows - 1; i++) {
				for (let j = 1; j < cols - 1; j++) {
					if (Array2[i - 1][j - 1].classList.contains('ship')) {
						field[i][j] = 1
					}
				}

			}


			for (let i = 0; i < 10; i++) {

				if (new_arr[i].indexOf(firstCoord.toString()) !== -1) {
					index_col_first = new_arr[i].indexOf(firstCoord.toString())
					index_row_first = i
					break
				}

			}

			for (let a = 0; a < data_ship; a++, index_col_first++) {
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						if (field[index_row_first + i + 1][index_col_first + j + 1] === 1) {
							return false
						}
					}
				}
			}
			return true
		}


		function inst(data_ship, place, arr_coor,) {

			arr_coor.push(place.id)
			pare_count++
			if (data_ship === 1) {
				let firstCoord = Number(arr_coor[0])
				if (checkOne(firstCoord, data_ship)) {
					let a = document.getElementById(firstCoord)
					if (a.classList.contains('ship') === false) {
						a.classList.add('ship');
						// a.classList.remove('empty');
					}
					console.log("установлен")
					checklastShips(data_ship)
					pare_count = 0
					arr_coor.length = 0;
				} else {
					console.log("не установлен")
				}

			}
			if (pare_count === 2) {
				let miny = false;
				let plsx = false;
				let firstCoord = Number(arr_coor[0])
				let last_Coord = Number(arr_coor[1])



				if (Math.floor(firstCoord / 10) === Math.floor(last_Coord / 10)) {
					napravlenie = 'horizontal'
					if (last_Coord > firstCoord) {
						plsx = true

					}
					// console.log(napravlenie)
					// console.log(miny)
				} else {

					napravlenie = 'vertical'
					if (last_Coord > firstCoord) {
						miny = true

					}
					// console.log(napravlenie)
					// console.log(miny)
				}

				if (napravlenie === 'horizontal') {
					if (checkHorizontal(firstCoord, last_Coord, data_ship, plsx)) {
						if (plsx) {
							for (; firstCoord <= last_Coord; firstCoord++) {
								let a = document.getElementById(firstCoord)
								// console.log(a)
								if (a.classList.contains('ship') === false) {
									a.classList.add('ship');
									// a.classList.remove('empty');
								}

							}
						} else {
							for (; firstCoord >= last_Coord; firstCoord--) {
								let a = document.getElementById(firstCoord)
								// console.log(a)
								if (a.classList.contains('ship') === false) {
									a.classList.add('ship');
									// a.classList.remove('empty');
								}

							}
						}
						checklastShips(data_ship)
						console.log('установлен')

					} else {

						console.log('не установлен')
					}
				} else {

					if (checkVertical(firstCoord, last_Coord, data_ship, miny)) {

						if (miny) {
							for (; firstCoord <= last_Coord; firstCoord += 10) {

								let a = document.getElementById(firstCoord)

								if (a.classList.contains('ship') === false) {
									a.classList.add('ship');
									// a.classList.remove('empty');
								}


							}
						} else {

							for (; firstCoord >= last_Coord; firstCoord -= 10) {

								let a = document.getElementById(firstCoord)

								if (a.classList.contains('ship') === false) {
									a.classList.add('ship');
									// a.classList.remove('empty');
								}


							}
						}
						checklastShips(data_ship)
						console.log('установлен')
					} else {
						console.log('не установлен')
					}

				}

				pare_count = 0
				arr_coor.length = 0;
			}

		}

		ships.addEventListener("click", function (event) {
			current = event.target.parentNode.lastElementChild.innerHTML
			if (event.target.parentNode.lastElementChild.innerHTML > 0) {
				data_ship = Number(event.target.closest('div').dataset.number)
			} else data_ship = 0

		})

		human_field_arr.forEach(place => {
			place.addEventListener("click", function () {
				if (data_ship && current > 0) {
					inst(data_ship, place, arr_coor)
					one_ship.innerHTML = shipsObj.one_ship
					two_ship.innerHTML = shipsObj.two_ship
					three_ship.innerHTML = shipsObj.three_ship
					four_ship.innerHTML = shipsObj.four_ship
					if (count_ships === 0) {
						human_field_arr.forEach(place => {
							removeAllEventListeners(place)
						})
						btn.setAttribute('disabled', 'disabled');
						btn_play.removeAttribute('disabled')
						ready = true
						return ready
					}

				}
			})
		})
	}, { "once": true })

}

function second_fase() {
	let flag = false
	let aii_field = []
	btn_play.addEventListener('click', function () {
		aii_field = aii_field_Generation(arr)
		btn_play.setAttribute('disabled', 'disabled')
		comp_field.forEach(element => {
			element.style.cssText = 'background-color: #d5e8e6'
		});
		window.onbeforeunload = function (e) {
			let info = {
				winrate: 0,
				games_played: 1,
				ships_destroyed: 0,
				x1_cage: 0,
				x2_cage: 0,
				x3_cage: 0,
				x4_cage: 0
			}
			put(info)
			e.returnValue = 'Есть несохранённые изменения! Уверены, что хотите покинуть страницу?';
			return e.returnValue;
		};
		flag = true
	}, { "once": true })

	let healthAii = 20;
	let healthPlayer = 20;

	comp_field.forEach(element => {
		element.addEventListener('click', function (event) {
			if (flag) {

				if (event.target.classList.contains('ship') || event.target.classList.contains('miss')) {
					console.log("куда тыкаешь")
				} else {
					again = false
					let index_col_first = 0
					let index_row_first = 0
					let coordination = Number(event.target.id)
					let newMatrixAii = toMatrix(arr)
					let newMatrixAiiId = toMatrix(arr)
					let a = document.querySelectorAll('.field-human div')
					for (let i = 0; i < 10; i++) {
						for (let j = 0; j < 10; j++) {
							newMatrixAiiId[i][j] = newMatrixAii[i][j].id
						}
					}

					for (let i = 0; i < 10; i++) {

						if (newMatrixAiiId[i].indexOf(coordination.toString()) !== -1) {
							index_col_first = newMatrixAiiId[i].indexOf(coordination.toString())
							index_row_first = i
							break
						}

					}
					if (aii_field[index_row_first + 1][index_col_first + 1] === 1) {
						console.log("попал")
						event.target.classList.add("destroy");
						again = true
						healthAii--
					} else {
						console.log("не попал")
						again = false
						event.target.classList.add("miss");
					}
					if (again === false) {

						while (true) {
							const bang = Math.floor(Math.random() * 100)
							if (a[bang].classList.contains('miss') || a[bang].classList.contains('destroy')) {
								continue
							} else {
								if (a[bang].classList.contains('ship')) {
									a[bang].classList.remove('ship')
									a[bang].classList.add('destroy')
									healthPlayer--;
									continue
								} else {
									a[bang].classList.add('miss')
									break
								}
							}
						}
					}
				}


				if (healthAii === 0) {
					console.log("win")
					comp_field.forEach(element => {
						removeAllEventListeners(element)
					})
					win.classList.remove("win-hidden")
					let info = {
						ships_destroyed: 10,
						winrate: 1,
						games_played: 1,
						x1_cage: 4,
						x2_cage: 3,
						x3_cage: 4,
						x4_cage: 1

					}
					put(info)
				}
				if (healthPlayer === 0) {
					console.log("lose")
					comp_field.forEach(element => {
						removeAllEventListeners(element)
					})
					lose.classList.remove("lose-hidden")
					let info = {
						ships_destroyed: 0,
						winrate: 0,
						games_played: 1,
						x1_cage: 0,
						x2_cage: 0,
						x3_cage: 0,
						x4_cage: 0

					}
					put(info)

				}
			}
		})
	})


}

first_fase()
second_fase()


function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function toMatrix(arr) {
	const len = 10;
	const side = 10;
	let result = [];
	for (let row = 0; row < side; row++) {
		result.push(arr.slice(side * row, side * (row + 1)));
	}
	return result;
}
function aii_field_Generation(arr) {
	const generationField = () => {
		const rows = 12;
		const cols = 12;
		const field = [];
		for (let i = 0; i < rows; i++) {
			const row = [];
			for (let j = 0; j < cols; j++) {
				row.push(0);
			}
			field.push(row);
		}

		const createShip = (power) => {
			while (true) {
				const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
				const row = Math.floor(Math.random() * 10) + 1;
				const col = Math.floor(Math.random() * 10) + 1;
				if (check(orientation, row, col, field, power)) {
					if (orientation === 'horizontal') {

						for (let j = 0; j < power; j++) {
							field[row][col + j] = 1
						}
						break

					} else {
						for (let i = 0; i < power; i++) {
							field[row + i][col] = 1
						}
						break
					}
				}
			}
		}
		createShip(4)
		createShip(3)
		createShip(3)
		createShip(2)
		createShip(2)
		createShip(2)
		createShip(1)
		createShip(1)
		createShip(1)
		createShip(1)
		return field
	}


	function check(orientation, row, col, field, power) {
		if (orientation === 'horizontal') {
			if ((col + power - 1) > 10) return false
			for (let a = 0; a < power; a++, col++) {
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						if (field[row + i][col + j] === 1) {
							return false
						}
					}
				}

			}
		} else {
			if ((row + power - 1) > 10) return false
			for (let a = 0; a < power; a++, row++) {
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						if (field[row + i][col + j] === 1) {
							return false
						}
					}
				}

			}
		}

		return true
	}

	let matrix = toMatrix(arr)
	let aii_field = generationField()
	return aii_field
}
function removeAllEventListeners(element) {
	const clonedElement = element.cloneNode(true);
	element.parentNode.replaceChild(clonedElement, element);
}

async function put(info) {


	const responce2 = await fetch('/putInfo', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(info)
	})
}