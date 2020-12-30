const tweetList = document.getElementById('tweet-list')
const form = document.getElementById('form')

// Event listeners

eventListeners()

function eventListeners(){


    form.addEventListener('submit', newTweet);

    tweetList.addEventListener('click', removeTweet);
    
    document.addEventListener('DOMContentLoaded', onLoad)
}

function uiTemplate(input){
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    const li = document.createElement('li')
    li.textContent = input;

    li.appendChild(removeBtn)
    tweetList.appendChild(li)
}

function newTweet(e){
  e.preventDefault()
    const tweet = document.getElementById('input').value
  
    uiTemplate(tweet)
 
    addTweetLocalStorage(tweet)

    this.reset()

}

function removeTweet(e){
    e.preventDefault()
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove()
    }

    removeTweetStorage(e.target.parentElement.textContent)
}

// Add the tweets to Local Storage
function addTweetLocalStorage(tweet){
    let tweets = getFromStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getFromStorage(){
    let tweets;
    const tweetLS = localStorage.getItem('tweets')

    if(tweetLS === null) {
        tweets = [];
    }else {
        tweets = JSON.parse(tweetLS);
    }

    return tweets;
}

function onLoad( ) {
    let tweets = getFromStorage();

    console.log(tweets);

    tweets.forEach(function(tweet) {

    uiTemplate(tweet)

    });
}



function removeTweetStorage(tweet) {

    let tweets = getFromStorage();


    const removeX = tweet.substring(0, tweet.length -1)
    console.log(removeX)

    tweets.forEach(function(tweet, index) {
        if(removeX === tweet) {
            tweets.splice(index, 1)
        }
    });


    localStorage.setItem('tweets', JSON.stringify(tweets))
    console.log(tweets)

}