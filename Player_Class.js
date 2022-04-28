"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
        this.score = 0;
    }
    Player.prototype.hit = function () {
        this.score = this.score + Math.floor(Math.random() * 7);
    };
    Player.prototype.displayScore = function () {
        return this.score;
    };
    return Player;
}());
exports.Player = Player;
// let player1=new Player()
// player1.hit();
// console.log(`Player Score= ${player1.displayScore()}`);
