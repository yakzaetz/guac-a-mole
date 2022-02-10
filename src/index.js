import View from "./scripts/view"
import Game from "./scripts/game"

document.addEventListener('DOMContentLoaded', ()=>{

    let el = document.querySelector(".gam")
    let view = new View(game, el);
    view.setupBoard();
    let game = new Game();
    // let ul = 


    window.game = game
})
