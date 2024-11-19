const link = document.querySelector('.stats')
const stat = document.querySelectorAll('.stats-item span')

link.innerHTML = '<a href="/myStats" class="info-link" style="color: aqua;"> <img src = "img/men.svg" alt = "" class="info-img"> <span>MyStats</span> </a>'

async function getStats() {
	const responce = await fetch('/getMyStats')
	const data = await responce.json()
	const values = Object.values(data);
	stat.forEach(function (elem,index) {
		elem.innerHTML = values[index]
	});
}

getStats()
