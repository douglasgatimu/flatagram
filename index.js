
function getImageAndRender() {
    fetch(`http://localhost:3000/images/1`)
        .then(res => res.json())
        .then(imageData => renderImageData(imageData))

}

function renderImageData(imageData) {
    let imageDataElement = document.querySelector('div.data-container')

    let imageSection = document.querySelector('.image-container')
    imageSection.src = imageData.image
    console.log(imageSection.src)


    imageSection.addEventListener('click', () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())

            .then(dogObj => {
                imageSection.src = `${dogObj.message}`
                imageData.image = `${dogObj.message}`
                updateURL(imageData)

            })
    })

    let likesSpan = document.querySelector('.likes-counter span')
    likesSpan.textContent = `${imageData.likes} likes `

    let likeBtn = imageDataElement.querySelector('.like-btn i')
    likeBtn.addEventListener('click', () => {

        likeBtn.classList.add('liked')

        imageData.likes = imageData.likes + 1
        likesSpan.textContent = `${imageData.likes} likes.`

    })

    let titleSection = document.querySelector('.title')
    titleSection.textContent = imageData.title

    titleSection.addEventListener('click', () => {
        imageSection.style.visibility = imageSection.style.visibility === "hidden" ? "visible" : "hidden";
    })


    getCommentsAndRender()

}


function getCommentsAndRender() {
    fetch(`http://localhost:3000/comments`)
        .then(res => res.json())
        .then(commentsObj => renderComments(commentsObj))


}

function renderComments(commentsArray) {
    console.log(commentsArray)

    let commentsSection = document.querySelector('ul.comments-list')

    let liCommentsArray = [];
    commentsArray.forEach((comment) => {
        let li = document.createElement('li')
        li.textContent = comment.content


        liCommentsArray.push(li)
        commentsSection.appendChild(li)
        li.addEventListener('click', () => {
            li.remove()

        })
    })
}

function updateURL(imageData) {
    fetch(`http://localhost:3000/images/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageData)
    })
        .then(res => res.json())
        .then(imageData => console.log(imageData))
}

function handleNewComment(e) {
    e.preventDefault()
    if (!e.target.new_comment.value) return
    let inputText = e.target.new_comment.value

    renderNewComment(inputText)
    
    e.target.new_comment.value = ''


}



function renderNewComment(inputText) {
    let commentElement = document.createElement('li')

    commentElement.textContent = inputText

    commentElement.addEventListener('click', () => {
        commentElement.remove()
        
    })

    document.querySelector('ul.comments-list').appendChild(commentElement)
}



document.querySelector('form').addEventListener('submit', handleNewComment)

getImageAndRender()


