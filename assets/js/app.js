const tweetList = document.getElementById('tweet-list')
const form = document.getElementById('form')

// Event listeners

eventListeners()

function eventListeners(){


    form.addEventListener('submit', newTweet);

    tweetList.addEventListener('click', removeTweet);
    
    
}



function newTweet(e){
    e.preventDefault()
    const tweet = document.getElementById('input').value
  

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';


    const li = document.createElement('li')
    li.textContent = tweet;

    li.appendChild(removeBtn)
    tweetList.appendChild(li)

}



function removeTweet(e){
    e.preventDefault()
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove()
    }
}