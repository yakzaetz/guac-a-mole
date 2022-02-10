// import flowerpot from "../styles/imgs/" 


class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
    }

    setupBoard() {
        let ul = document.createElement("ul");
        ul.classList.add("list")
        this.el.appendChild(ul);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let li = document.createElement("li");
                li.setAttribute('data-pos', `[${i},${j}]`);
                li.classList.add("flower-pot");
                let image = document.createElement("img");
                image.setAttribute("src", "./src/styles/imgs/soil.png")
                image.classList.add("soil");
                let image2 = document.createElement("img");
                image2.setAttribute("src", "./src/styles/imgs/new-avocado.png")
                image2.classList.add("avocado");
                li.appendChild(image)
                li.appendChild(image2)
                ul.appendChild(li);
            }
        }
    }
}

export default View