const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')


eventListiners()
function eventListiners() {
    form.addEventListener('submit', onSubmit)
    document.addEventListener('click', deleteItem)


}

function uiTemplete(input) {
    const li = document.createElement('li')
    const removeItem =document.createElement('a')
    removeItem.classList = 'remove-item'
    removeItem.textContent = 'X'
    li.textContent = input
    li.appendChild(removeItem)

    result.appendChild(li)
}

function onSubmit(e){
    e.preventDefault()

    const inputValue = input.value


    uiTemplete(inputValue)

    addToStorage(inputValue)

// this.reset()


}


function deleteItem(e) {

    if(e.target.classList.contains('remove-item')) {
        e.target.parentElement.remove()

    }
}

function addToStorage(item) {
    let storeItems = getFromStorage()

    storeItems.push(item)

    
    localStorage.setItem('items', JSON.stringify(storeItems))
    console.log(storeItems)
}

function getFromStorage() {
    const itemStore = localStorage.getItem('items')

    let items;
    if (itemStore === null) {
        items = [];
    }else {
        items = JSON.parse( itemStore);
    }

    return items
}



