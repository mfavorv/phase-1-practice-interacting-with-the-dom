document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    function addCounter() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
     }
       
   let intervalSet = setInterval(addCounter,1000) 

  let minus = document.getElementById("minus")
  minus.addEventListener("click", () => {
  counter.innerHTML = parseInt(counter.innerHTML) - 1
    
  })

  let addition = document.getElementById("plus")
  addition.addEventListener("click", () => {
   counter.innerHTML = parseInt(counter.innerHTML) + 1
   
})

 let heart = document.getElementById("heart")
 heart.addEventListener("click", () => {
  let currentNumber = counter.textContent;
  let likes = {};
  if (!likes[currentNumber]) {
    likes[currentNumber] = 1;
} else {
    likes[currentNumber]++;
}


let like = document.createElement("span");
like.textContent = `${currentNumber} has been liked ${likes[currentNumber]} times.`;

let likesList = document.querySelector(".likes");
likesList.appendChild(like);
 })

 let pause = document.getElementById("pause")
 pause.addEventListener("click", () => {
if (pause.textContent === "resume"){
    minus.disabled = false;
    addition.disabled = false;
    heart.disabled = false;
    pause.textcontent = "pause";

}else {
    clearInterval(intervalSet);
    minus.disabled = true;
    addition.disabled = true;
    heart.disabled = true;
    pause.textcontent = "resume";  

}
 })

 let commentForm = document.getElementById("comment-form");
let  commentsList = document.getElementById("list")
commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value

    if (commentText !== "") {
        let commentElement = document.createElement("div");
        commentElement.textContent = commentText;
        commentsList.appendChild(commentElement);
        commentInput.value = "";
        
    }
})  
})
