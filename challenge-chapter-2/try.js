// An individual player. Holds properties and behavior for one player
class Player {
    constructor(name) {
        this.name = name;
    }

    play() {
      console.log(this.name, "plays")
    }
    
  }
  
  // Class that holds a collection of players and properties and functions for the group
  class Players {
    constructor(){
      this.players = []
    }
    // create a new player and save it in the collection
    newPlayer(name){
      let p = new Player(name)
      this.players.push(p)
      return p
    }

    get allPlayers(){
      return this.players
    }

    // this could include summary stats like average score, etc. For simplicy, just the count for now
    get numberOfPlayers(){
        return this.players.length
    }

  }
  
  let league = new Players()
  league.newPlayer("Mark")
  league.newPlayer("Roger")
  
  // list all the players
  console.log(league.numberOfPlayers + " Players")
  console.log(league.allPlayers)
  
  
//   // make them do something
//   league.allPlayers.forEach(player => player.play())


//Inheritance example
// class person{
//     constructor(name){
//         this.name = name;
//     }
//     //method to return the string
//     toString(){
//         return (`Name of person: ${this.name}`);
//     }
// }
// class student extends person{
//     constructor(name,id){
//         //super keyword to for calling above class constructor
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return (`${super.toString()},Student ID: ${this.id}`);
//     }
// }
// let student1 = new student('Mukul',22);
// console.log(student1.toString());

let nilai = "90";
const nilai2 = parseInt(nilai)
console.log(nilai2 + 1)