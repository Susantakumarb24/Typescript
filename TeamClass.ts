import { Player } from "./Player_Class";


class Team{
    teamScore:number=0;
    addScore(player:Player){
    this.teamScore=this.teamScore+player.displayScore()
    }
    displayTeamScore(){
        return this.teamScore;
    }

}

// let arr=["p1","p2","p3","p4","p5"];
// for(let i:number=0;i<arr.length;i++){
//     let arr: any[0]=new Player();
// }


let team=new Team()
let player1=new Player();
player1.hit();
let player2=new Player();
player2.hit();
let player3=new Player();
player3.hit();
let player4=new Player();
player4.hit();
let player5=new Player();
player5.hit();
let player6=new Player();
player6.hit();
let player7=new Player();
player7.hit();
let player8=new Player();
player8.hit();
let player9=new Player();
player9.hit();
let player10=new Player();
player10.hit();
let player11=new Player();
player11.hit();
let player12=new Player();
player12.hit();
let arr=[player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12]


for(let i:number=0,j:number=1;i<arr.length;i++,j++)
{
    let str:string="Player"
    str=str+j;
    console.log(`${str} Score= ${arr[i].displayScore()}`);
    team.addScore(arr[i])
}



// console.log(`Player1 Score= ${player1.displayScore()}`);
// console.log(`Player2 Score= ${player2.displayScore()}`);
// console.log(`Player3 Score= ${player3.displayScore()}`);
// console.log(`Player4 Score= ${player4.displayScore()}`);
// console.log(`Player5 Score= ${player5.displayScore()}`);
// team.addScore(player1)
// team.addScore(player2)
// team.addScore(player3)
// team.addScore(player4)
// team.addScore(player5)

console.log(`Team Score= ${team.displayTeamScore()}`)