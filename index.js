console.log("Hello World! My JS is linked, hurray")
document.querySelector("form").addEventListener("submit", addMovie)
let message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector("input")

    
    let movie = document.createElement('li');
    
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent="X"
    deleteBtn.addEventListener("click", deleteMovie)
    
    

    const movieList = document.querySelector('ul')
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)
    inputField.value = ""

}

function deleteMovie (event){
    event.target.parentNode.remove()
    message.textContent= (`${event.target.parentNode.textContent.replace("X", " ")} Deleted`)
    
    
    revealMessage()

}


function crossOffMovie (event){
    event.target.classList.toggle("checked")
        if (event.target.classList.contains("checked")){
            message.textContent=`${event.target.textContent} "Watched"`
        } else {
            message.textContent = "Movie added back!"
            message.textContent=`${event.target.textContent} "added back to list"`
        }
        revealMessage()
}


function revealMessage() {
    setTimeout(() => {
        message.classList.add("hide") 
    },  1000);
}

