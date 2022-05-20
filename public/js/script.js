fetch('/api/v1/characters')

.then(res => res.json())
.then(data => {
    renderCharacters(data)

})

function renderCharacters(characters) {
    const charactersList = document.querySelector('#characters')
    const characterHtml = characters.map(character => {
        return `
        <li>${character.name}</li>
        `
    }).join('')
    charactersList.innerHTML = characterHtml
}