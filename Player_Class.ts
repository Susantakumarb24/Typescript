export class Player{
    score:number=0;
    hit(){
        this.score=this.score+Math.floor(Math.random() * 7);
    }
    displayScore(){
        return this.score;
    }
}

// let player1=new Player()
// player1.hit();
// console.log(`Player Score= ${player1.displayScore()}`);