
//black checkers
const players1 = document.querySelectorAll(".player1");

//red checkers
const players2 = document.querySelectorAll(".player2");


//white cols -white places-valid moves
const validMoves = document.querySelectorAll(".even");


  let movePlace = validMoves.forEach(validMove => {
     validMove.onclick = function(event){
       event.target.getAttribute("id");
       return this.id;
     }
  })
  
  let activChecker = players1.forEach((player)=>{
    player.onclick = function(event){
      event.target.getAttribute("id");
      return this.id;
    }
  })

  function moveChecker(movePlace, activChecker){
    if( activChecker && movePlace ){
        document.target(movePlace).appendChild(movechecker);
}
  }
    movechecker(T12,C31);
    //I tried to move the checker but I don't what's wrong.
    