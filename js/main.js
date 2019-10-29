var boxElement = document.querySelector(".box-1")

boxElement.addEventListener('click', boxClicked)

function boxClicked() {
    console.log("clicked", boxElement)
}