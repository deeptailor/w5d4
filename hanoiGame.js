const readline = require('readline');
const reader = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});


class Game{

  constructor(stacks){
    this.stacks = stacks;
  }

  print() {
    return JSON.stringify(this.stacks);
  }

  promptMove(callback){
    this.print();

    reader.question("Where to you want to move a disc from?", function(fromStack){
      reader.question("Where do you want to move the disc to?", function(toStack){
        callback(fromStack, toStack);
      })
    });
  }

  isValidMove(start, end){
    if (start >= this.stacks.length || start < 0 ) {
      return false;
    }
    if (end >= this.stacks.length || end < 0 ) {
      return false;
    }
    if (this.stacks[start].length === 0) {
      return false;
    }
    if (this.stacks[end].length === 0 || this.stacks[start][0] < this.stacks[end][0]){
      return true;
    }
    return false;
  }

  move(start, end) {
    if (this.isValidMove(start, end)) {
      this.stacks[end].push(this.stacks[start].shift());
      console.log(this.stacks)
      return true;
    }
    return false;
  }

  isWon() {
    if (this.stacks[0].length === 0 && (this.stacks[1].length === 0 || this.stacks[2].length === 0)){
      return true;
    }
    return false;
  }

  run(callback) {

    this.promptMove((fromStack, toStack)=>{
      if (this.move(fromStack, toStack)){
        if (this.isWon()){
          callback();
        }
        else{
          this.run(callback);
        }
      }
      else{
        throw "Error";
      }
    });

  }

}

let g = new Game([[1,2,3],[],[]]);
g.run(function(){
  console.log('You win!');
  reader.close();
});
