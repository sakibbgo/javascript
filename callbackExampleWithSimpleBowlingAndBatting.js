  // This is my first java script code


let batting = function(){
    console.log('Hit Six. The ball is flying now so we are waiting until it crosses the boundry.');
    for (i = 0; i < 101; i+=20) { 
        console.log(i+' Meter');
      }
}

let bowling = function(callback){
    console.log('Fast Bowling ready.')
    console.log('Bowler running and bowled.')
    console.log('Bowl ready to get hit. Time for a calback to hit six and wait to finish hitting 6 by crossing the boundry before game over.')
    callback();
    console.log('It is a big six. Game Over Now');
      

}

bowling(batting);
