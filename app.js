const body = document.querySelector('body');
body.addEventListener('click', function(){

    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
     .then( res => {
        console.log(res)
        res.json().then( data => {
            document.querySelector('h1').innerText=data.joke;
        })
     })
     .catch(e => {
        console.log("ERROR",e)
     })
})
