(function(){
    console.group('file js called');

const jokeContainer = document.querySelector('.jokeText');

const jokeButton = document.querySelector('#getJoke');

//console.log(jokeButton, jokeContainer);

const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?type=single";


let getJoke = () =>{
    jokeContainer.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item => {jokeContainer.textContent = `${item.joke}`;
    jokeContainer.classList.add('fade');
    });
}

jokeButton.addEventListener('click',getJoke);

getJoke();

})();