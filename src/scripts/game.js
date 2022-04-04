import { setTimeout } from "core-js";
import Board from "./board";


class Game {
    constructor() {
        this.board = new Board();
        this.lastItem;   
        this.randomSquare = this.randomSquare.bind(this);
        this.guac = this.guac.bind(this);
        this.pointCount = this.pointCount.bind(this);
        this.guacTheCado = this.guacTheCado.bind(this);
        this.timer = this.timer.bind(this);
        this.score = 0;   
        this.pause = false;
        this.play = false;
        this.timeleft = 10;
        this.pauseGame = this.pauseGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.resumeGame = this.resumeGame.bind(this);
        this.spaceBar = this.spaceBar.bind(this);
        this.positions = {'[0,0]': false, '[0,1]': false,'[0,2]': false,'[1,0]': false,'[1,1]': false,'[1,2]': false,'[2,0]': false,'[2,1]': false,'[2,2]': false}
        document.addEventListener("keyup", (e) => {
            if (e.code === "Space") {
                this.spaceBar(e);
                // console.log("your mom")
            }
        });
        this.guacTheCado();
    }

    randomSquare() {
        let list = document.querySelector(".list")
        let randomItems = list.children;
        let randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
        

        if(this.lastItem === randomItem){
            return this.randomSquare()
        }else{
            this.lastItem = randomItem;
        }
        return randomItem;
    }

    pointCount(e){
        if (this.positions[e.target.parentElement.dataset.pos]){
            this.score += 1;
            this.positions[e.target.parentElement.dataset.pos] = false;
            e.target.classList.add("avocado");
            e.target.classList.remove("new-avocado");
            const score = document.querySelector(".score")
            score.innerText = `Score: ${this.score}`
        }
    }

    guacTheCado(){
        let list = document.querySelector(".list")
        let pits = list.children;        
        for (let i = 0; i < pits.length; i++) {
            // debugger
            pits[i].lastChild.addEventListener('click', (e) => this.pointCount(e))
        }
    }
    
    timeToGuac(min, max){
        return Math.round(Math.random()  * (max - min) + min);
    }

    guac() {
        let square = this.randomSquare();
        let time = this.timeToGuac(1750, 1850);
        this.positions[square.dataset.pos] = true;
        square.lastChild.classList.add("new-avocado")
        square.lastChild.classList.remove("avocado")
        setTimeout(() => {
            square.lastChild.classList.add("avocado");
            square.lastChild.classList.remove("new-avocado");
            this.positions[square.dataset.pos] = false;
        }, time);
    }

    timer(){
        this.downloadTimer = setInterval(()=> {
            if (this.timeleft <= 0) {
                clearInterval(this.downloadTimer);
                clearInterval(this.gameStart);
                const lowest_nav = document.querySelector(".lowest-nav");
                setTimeout(() => {
                    lowest_nav.innerText = "Hit spacebar to restart the goodness :)";
                }, 1000);
                this.play = false;
            }
            else if (this.timeleft > 0) this.timeleft -= 1;
            document.querySelector(".timer").innerText = `Timer: ${this.timeleft}`;
        }, 1000);
    }

    pauseGame(){
        clearInterval(this.downloadTimer);
        clearInterval(this.gameStart);
        this.pause = true;
    }
  
    resumeGame(){
        this.startGame();
        this.pause = false;
        this.play = true;
    }

    restartGame(){
        this.pause = false;
        this.startGame();
        this.score = 0;
        this.timeleft = 10;
        const score = document.querySelector(".score");
        score.innerText = `Score: ${this.score}`;
        document.querySelector(".timer").innerText = `Timer: ${this.timeleft}`;
    }

    spaceBar(e){
        const lowest_nav = document.querySelector(".lowest-nav")
        // debugger
        if (!this.play){
            this.restartGame();
            lowest_nav.innerText = "Hit spacebar to pause the fun :)"
        }else if(this.play && !this.pause){
            lowest_nav.innerText = "Hit spacebar to continue playing :)"
            this.pauseGame();
        }else if(this.play && this.pause){
            lowest_nav.innerText = "Hit spacebar to pause the fun :)"
            this.resumeGame();
        }
    }

    startGame(){
        this.gameStart = setInterval(this.guac, 1250);
        this.timer();
        // this.guacTheCado();
        this.play = true;
    }

}

export default Game