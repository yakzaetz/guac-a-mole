import View from "./scripts/view"
import Game from "./scripts/game"


document.addEventListener('DOMContentLoaded', ()=>{

    const open = document.getElementById("open");
    const modal_container = document.getElementById("modal-container");
    const close = document.getElementById("close")

    open.addEventListener('click', () => {
        modal_container.classList.add("show");
    });

    close.addEventListener("click", () => {
        modal_container.classList.remove("show")
    })

    // modal_container.addEventListener("click", () => {
    //     modal_container.classList.remove("show")
    // })

    let el = document.querySelector(".gam")
    let view = new View(game, el);
    view.setupBoard();
    let game = new Game(); 

    window.game = game
})
