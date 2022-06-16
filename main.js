// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartLike = document.querySelectorAll(".like-glyph");
const error = document.getElementById('modal') 
heartLike.forEach(like => like.addEventListener('click', like))

//  takes the event listener and finds like glyph
heartLike.forEach((like) => like.addEventListener('click', () => {
  mimicServerCall()
    .then(() => switchLike(like))
    .catch((error) => display(error));
}));

function switchLike(like) {
  if (like.textContent === EMPTY_HEART) {
    like.classList.add('activated-heart')
    return like.textContent = FULL_HEART;
    
  } else {
      like.classList.remove('activated-heart')
    return like.textContent=EMPTY_HEART
  }
  
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}