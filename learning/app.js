

const storageContent = localStorage.getItem('names')


let names;
if(storageContent === null) {
    names = [];
}else {
    names = JSON.parse(storageContent)
}


names.push('Saalu')
names.push('Williams Asamoah')
names.push('Joe Doe')

localStorage.setItem('names', JSON.stringify(names))
