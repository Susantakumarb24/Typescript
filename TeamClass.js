"use strict";
exports.__esModule = true;
var Player_Class_1 = require("./Player_Class");
var Team = /** @class */ (function () {
    function Team() {
        this.teamScore = 0;
    }
    Team.prototype.addScore = function (player) {
        this.teamScore = this.teamScore + player.displayScore();
    };
    Team.prototype.displayTeamScore = function () {
        return this.teamScore;
    };
    return Team;
}());
// let arr=["p1","p2","p3","p4","p5"];
// for(let i:number=0;i<arr.length;i++){
//     let arr: any[0]=new Player();
// }
var team = new Team();
var player1 = new Player_Class_1.Player();
player1.hit();
var player2 = new Player_Class_1.Player();
player2.hit();
var player3 = new Player_Class_1.Player();
player3.hit();
var player4 = new Player_Class_1.Player();
player4.hit();
var player5 = new Player_Class_1.Player();
player5.hit();
var player6 = new Player_Class_1.Player();
player6.hit();
var player7 = new Player_Class_1.Player();
player7.hit();
var player8 = new Player_Class_1.Player();
player8.hit();
var player9 = new Player_Class_1.Player();
player9.hit();
var player10 = new Player_Class_1.Player();
player10.hit();
var player11 = new Player_Class_1.Player();
player11.hit();
var player12 = new Player_Class_1.Player();
player12.hit();
var arr = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12];
for (var i = 0, j = 1; i < arr.length; i++, j++) {
    var str = "Player";
    str = str + j;
    console.log("".concat(str, " Score= ").concat(arr[i].displayScore()));
    team.addScore(arr[i]);
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
console.log("Team Score= ".concat(team.displayTeamScore()));
