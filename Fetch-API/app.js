const loadData = document.querySelector('.btn1')
const jsonLoad = document.querySelector('.btn2')

const result = document.querySelector('.result')


eventListeners()

function eventListeners(){

    loadData.addEventListener('click', loadText)
    jsonLoad.addEventListener('click', loadJSON)
}



function loadText(){
    fetch('data.txt')
    .then(res => {
    return res.text()
    })
    .then(data => {
        console.log(data)
    })
}


function loadJSON(){
    fetch('employee.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)

        let html = '';

        data.forEach(employee => {
            html +=`
                <li>${employee.name} - ${employee.job} </li>
            `;
        });

        result.innerHTML = html
    })
}