// import { set } from "core-js/core/dict";
// import setTimeout from "core-js/fn/set-timeout";

class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    static makeGrid() {
        const grid = [];

        for (let i = 0; i < 3; i++) {
            grid.push([]);
            for (let j = 0; j < 3; j++) {
                grid[i].push(null);
            }
        }
        return grid;
    }
    // getDataPos(pos){
    //     this.grid[pos];
    // }

    // setDataPos(pos, v){
    //     // this.grid[pos] = v
    // }

    // showAvo(pos, time){
    //     this.setDataPos(pos, true);
    //     setTimeout(() => {
    //         this.setDataPos(pos, null);
    //     }, time);
    // }

}

export default Board