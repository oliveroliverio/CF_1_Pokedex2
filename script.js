const galleryElement = document.getElementById('pokemon-gallery')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
let allPokemon = []

function createPokemonCard(pokemon) {
	const card = document.createElement('div')
	card.className = 'pokemon-card bg-white rounded-lg overflow-hidden'

	card.innerHTML = `
        <div class="card-header p-4">
            <h2 class="text-xl font-bold text-white capitalize">${
							pokemon.name
						}</h2>
        </div>
        <div class="p-4">
            <div class="flex justify-center mb-4">
                <img src="${pokemon.sprites.front_default}" alt="${
		pokemon.name
	}" class="w-32 h-32 object-contain">
            </div>
            <div class="text-sm">
                <p class="mb-2">
                    <span class="font-semibold">Types:</span> ${pokemon.types
											.map((type) => type.type.name)
											.join(', ')}
                </p>
                <p>
                    <span class="font-semibold">Height:</span> ${
											pokemon.height / 10
										} m
                </p>
            </div>
        </div>
    `

	return card
}

function createSkeletonCard() {
	const card = document.createElement('div')
	card.className = 'pokemon-card bg-white rounded-lg overflow-hidden'

	card.innerHTML = `
        <div class="p-4">
            <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="h-32 bg-gray-200 rounded mb-4"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
    `

	return card
}

function displayPokemon(pokemonList) {
	galleryElement.innerHTML = ''
	pokemonList.forEach((pokemon) => {
		const card = createPokemonCard(pokemon)
		galleryElement.appendChild(card)
	})
}

function filterPokemon(searchTerm) {
	const filteredPokemon = allPokemon.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	)
	displayPokemon(filteredPokemon)
}

async function fetchPokemon() {
	try {
		// Display skeleton loaders
		for (let i = 0; i < 20; i++) {
			galleryElement.appendChild(createSkeletonCard())
		}

		const promises = []
		for (let i = 1; i <= 20; i++) {
			promises.push(
				fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((res) =>
					res.json()
				)
			)
		}

		allPokemon = await Promise.all(promises)

		// Display actual Pokémon data
		displayPokemon(allPokemon)
	} catch (error) {
		console.error('Failed to fetch Pokémon data:', error)
		galleryElement.innerHTML =
			'<p class="text-center text-red-500">Failed to fetch Pokémon data</p>'
	}
}

function performSearch() {
	filterPokemon(searchInput.value)
}

searchInput.addEventListener('input', performSearch)
searchButton.addEventListener('click', performSearch)

searchInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		performSearch()
	}
})

fetchPokemon()
