const loadPlayerDetails = (searchText) => {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchText}`
    fetch(url).then(res => res.json()).then(data => displayPlayerDetails(data.player))
}

const displayPlayerDetails = (players) => {
    // console.log(players)
    const playersContainer = document.getElementById('players-container')
    playersContainer.textContent = ""

    document.getElementById('search-value').value = ""

    players.forEach(player => {
        // console.log(player.idPlayer)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card w-50 mb-2">
            <img src="${player.strThumb}" class="card-img-top h-50 w-full" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">${player.strNationality}</p>
                </div>
        </div>`
        playersContainer.appendChild(div)
        loaderSpinner(false)
    })
}

document.getElementById('btn-search').addEventListener('click', function(){
    loaderSpinner(true)
})

const serachAllData = () => {
    const searchValue = document.getElementById('search-value')
    const searchText = searchValue.value
    loadPlayerDetails(searchText)
}

// loaderspinner
const loaderSpinner = (isLoading) => {
    const loader = document.getElementById('loader-spinner')
    if (isLoading) {
        loaderSpinner.classList.remove('d-none')
    }
    else {
        loaderSpinner.classList.add('d-none')
    }
}
loadPlayerDetails('messi')