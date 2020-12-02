class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){

        playerCount = playerCountRef.val();
        player.getCount();

      }
      form = new Form();
      console.log("Programmer DSP");
      form.display();
    }

  }

    play(){

      form.hide();
      textSize(20);
      text("Game Start" , 120 , 100);

      Player.getPlayerInfo();

      console.log("d");

      if(allPlayers!==undefined){

        console.log("s");

        var displayPosition = 130;

        for(var plr in allPlayers){

        if(plr==="player"+ player.index){

          console.log("p");
          fill("red");

        }

        else{

          fill("black");

        }

        displayPosition+=20;

        textSize(15);
        console.log("pdsp");
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance , 120 , displayPosition);

      }
      }

      if(keyDown(UP_ARROW)&&player.index!==null){

        player.distance += 50;
        player.update();

      }

    }
}
