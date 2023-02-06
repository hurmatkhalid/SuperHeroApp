//https://superheroapi.com/api/477042714621911/id

const superHeroToken = '477042714621911';
const baseURL = `https://superheroapi.com/api.php/${superHeroToken}`;
const Button = document.getElementById('button');
const nameOfHero = document.getElementById('name');
const SearchDiv = document.getElementById('search');

const getSuperHero = (id) => {
	let img;
	fetch(`${baseURL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);

			document.querySelector(
				'.new'
			).innerHTML = `<img src="${json.image.url}" height="200" width="200"/>`;
		});
};
const getSuperHeroByName = (name) => {
	let img;
	fetch(`${baseURL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);

			document.querySelector(
				'.new'
			).innerHTML = `<img src="${json.results[0].image.url}" height="200" width="200"/> <h1>${json.results[0].biography.publisher}</h1>`;
		});
};
SearchDiv.onclick = () => {
	const name = nameOfHero.value;
	getSuperHeroByName(name);
};

Button.addEventListener('click', () => {
	console.log('click');
	getSuperHero(Math.floor(Math.random() * 700 + 1));
});
