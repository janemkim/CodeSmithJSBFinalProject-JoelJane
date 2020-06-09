//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////

//Joel + Jane game:
// A choose-your-own-adventure game where you are a Pokémon trying to survive. Escape the Safari Zone during hunting season without getting caught by a trainer, dying of dysentery, or getting killed by another Pokémon!
//Name yourself, and choose your type! Depending on your Pokémon type, your options change.
//Unfortunately, valar morghulis... even Pokémon...

const player = {
  //Create object player with keys Name and Type.
  Name: '',
  Type: '',
}

const messages = {
  //Create object to hold all messages used in game.
  //Used in all sections:
  GO: "GAME OVER!",
  Error: "ERROR: You have to choose one of the given options!",
  TA: "The enemy is weakened, but your attack wasn't strong enough!",
  TA1: "It's your turn to attack!",
  //Used in beginGame:
  A: "Hello! Welcome to the wonderful world of Pokémon!",
  B: "It's Pokémon hunting season! New trainers have graduated from their trainee program and have descended upon the Safari Zone to catch 'em all!",
  C: "Are you ready to hear the bad news?",
  D1: "You are a Pokémon yourself, and worse, the newest and rarest of them all! What are you called?",
  D2: "Too bad, you have to hear it anyway.",
  E: `, you are a prized Pokémon in the middle of the Safari Zone. You must escape without getting caught by a trainer, dying of dysentery, or getting killed by another Pokémon!`,
  //Used in askType():
  AskType: "Before we move forward we need to know what kind of Pokémon you are. Are you fire, water, or grass type? (This will determine how you handle certain situations as well as your special attack)",
  //Used in stage1():
  S1A: "You find yourself trapped on an island in the middle of the Safari Zone. What do you do? A) Swim or B) Build a raft out of the trees around you? (Type A or B)",
  S1A1: "Congratulations! You've successfully crossed the river!",
  S1A2: "Unfortunately the water has doused your flames, and you have died of dysentery.",
  S1B1: "Unforuntately, you have been overcome with the guilt of tearing down your Earthly brethren and have perished.",
  //Used in stage2():
  S2A : "You immediately run into a trainer! BATTLE!! They send out a grass type Pokémon. 'GO! BULBASAUR!' What do you do? A) Fight,  B) Run",
  S2B : "You just crossed the water and are EXHAUSTED.  There's nowhere to run!",
  S2C : "Which attack are you going to use? A) Tackle or B) Special Attack",
  S2D: "Congratulations! You've successfully defeated Bulbasaur and its trainer!",
  //Used in stage3():
  S3A: "After your soujourn over the river and your battle with Bulbasaur, you are ravenous. You need some food. What do you do? A) Eat berries or B) Photosynthesize",
  S3B: "Congratulations! You shoved the berries down your gullet and gained enough energy to move on!",
  S3C: "Unfortunately, despite your vain attempt to gain energy from the sun, you have received a rad tan, but also died of dysentery.",
  S3D: "Unfortunately, you have consumed your Great Aunt Petunia. Overcome with guilt over having cannibalized your Earthly brethren, you have perished.",
  S3E: "Congratulations! You have gained a rad tan, and enough energy to move on!",
  //Used in stage4():
  S4A : "You run into a bigger stronger Pokémon, Charizard! And It. Looks. MEAN. It's a fire type! What are you going to do?  A) Fight or B) Run",
  S4B: "Congratulations! You've sucessfully defeated Charizard! You can now continue making your way through the Safari Zone",
  S4C: "Your attacks have no affect on it! You might consider another approach...",
  S4D: "You successfully ran away from Charizard in the nick of time!",
  //Used in bossStage():
  SBA: "*SUSPENSEFUL BOSS MUSIC STARTS BLASTING*",
  SBB1:`OH NO!! Another Pokémon has blocked your path.  Not only is it stronger than you, it's also SMARTER.  It's a wild Sophie-mon!`,
  SBB2: `SOPHIE-MON: "Bahahah! Fool!! I may have taught you everything you know, but your code will never be as DRY as mine! This is where your journey ends n00b!"`,
  SBB3: "Now's the time to prove yourself. What are you going to do? A) Fight or B) Run",
  SBC: "You can't run from the Boss!",
  SBD:"You have reached the edge of the Safari Zone! Just as you finally reach the gates...",
  SBS1: "Your last attack was enough to defeat Sophie-mon and prove you're not a total n00b!",
  SBS2a: `SOPHIE-MON: "Wow...you're...much stronger than I anticipated...but you still have a lot to learn. As you continue on with your journey, remember to use camelCase and don't forget your semicolons..."`,
  SBS2b: `SOPHIE-MON:"...and PLEASE PLEASE PLEASE use the necessary //comments so those that traverse your code after you're gone don't become lost souls aimlessly wandering around."`,
  SBS3a: `SOPHIE-mon stands up and gracefully walks away in search of other students to surprise. As she disappears into the Safari Zone you hear her voice in the distance...`,
  SBS3b: `SOPHIE-MON:" Oh yeah... and one... more... thing..."`,
  //Used in stageFinal():
  SFA: "Out of nowhere, eerie music starts playing in the background...",
  SFB: "You have reached the gates at the end of the Safari Zone but as you reach out to open them they fade away, into an empty void of despair and darkness...",
  SFC: "Your strength fades, and you look around yourself one last time...",
  SFD: "You are still on the island...",
  SFE: "You are dying of dysentery...",
  SFF: "In your last fleeting moments, you have imagined the entire adventure...",
  SFG: "You have died of dysentery.",
  SFH: '"FIN."',
}

function beginGame () {
  //Create function to begin game when run.
  alert(messages.A); // Hello! Welcome to...
  alert(messages.B); // It's Pokémon hunting season!...
  let result = confirm(messages.C); // Ready for bad news?
  if (result) {
    //If ready, prompt for name. If not, too bad, prompt for name.
    askName();
  } else {
    alert(messages.D2); //Too bad, you have to hear it anyway.
    let name = prompt(messages.D1, ['Be creative']) + "-mon";
    askName();
  }
  askType();
  //go to next stage of game.
}

function askName () {
  let name = prompt(messages.D1, ['Be creative']) + "-mon";
    //Concatenate "-mon" to end of entered name.
    if (name === '-mon' || name === ' -mon' || name === "Be creative-mon" || name === 'null-mon') {
      alert('Please enter a name!');
      askName();
    } else {
      alert(`Your name is ${name}.`);
      player.Name = name;
      //Reassign value of player.Name with new name.
    }
}

function askType () {
  //Create function to prmopt type of Pokémon.
  alert(player.Name + messages.E); // Are you fire/water/grass?
  let type = prompt(messages.AskType , []);
    type = type.toLowerCase()
    //toLowerCase to prevent case sensitivity issues
    if (type === 'water' || type === 'fire' || type === 'grass') {
      player.Type = type;
      //Reassign value of player.Type with entered type.
      alert(`Great! You are a ${type} type Pokémon.`);
      stage1();
    } else {
      alert(messages.Error);
      askType();
      //If player doesn't enter one of given options, ERROR, then start function again.
    }
}

function gameOver() {
  //Create function to allow player to choose whether to try again or end game.
  alert(messages.GO); //Game over!
    let tryAgain = confirm('Would you like to try again?')
      if (tryAgain === true) {
          beginGame();
        } else {
          return;
        }
}

//Below array contains all of our statements that will generate during a battle
let myArray =  ["The enemy Pokémon attacks you. It's a critical hit!" , "The enemy Pokémon attacks... but misses!", "The enemy Pokémon attacks and causes minor damage.", "The enemy Pokémon looks confused and does nothing.",  "The enemy Pokémon attacks, but ends up hurting itself!", "The enemy Pokémon picks up a boulder and throws it at you! Ouch!", "The enemy Pokémon tries to intimidate you but it doesn't work!", "The enemy Pokémon tries to intimidate you. You feel intense anxiety!", "The enemy Pokémon stomps the ground in frustration but doesn't attack!"];

// (myArray.battleComments()); is used to execute the code below which will randomly generate one of the comments from the array above.
Array.prototype.battleComments = function (){
  return myArray[Math.floor(Math.random()*myArray.length)];
}


function stage1 () {
  //Stage1: On an island in the middle of the Safari Zone. A) swim or B) build a raft
  //water & grass can swim across, fire dies of dysentery if swim, grass dies of guilt if build raft.
  let option = prompt(messages.S1A, []);
    option = option.toUpperCase(); 
    //toUpperCase to prevent case sensitivity issues
  if (option === 'A') {
    if (player.Type === 'water' || player.Type === 'grass') {
      alert(messages.S1A1);
      //Congratulations! You've successfully crossed the river!
      stage2(); //On to next stage
    } else if (player.Type === 'fire') {
      alert(messages.S1A2); //Dead of dysentery
      gameOver(); //Game over function
    }
  } else if (option === 'B') {
    if (player.Type === 'grass') {
      alert(messages.S1B1); //Dead of guilt
       gameOver(); //Game over!
    } else if (player.Type === 'water' || player.Type === 'fire') {
      alert(messages.S1A1); 
      stage2();
    }
  } else {
    alert(messages.Error);
    stage1();
  }
}

function stage2 () {
  //Stage 2: Run into enemy trainer, fight grass type Bulbasaur. Can't run.
  //Bulbasaur has 60 hp. Tackle is -15hp. Fire sp attck is -30, grass sp attck is -25, water sp attk is -10.
  let option = prompt(messages.S2A, []);
    option = option.toUpperCase();
  if (option === 'B')  { //if RUN
    alert(messages.S2B); //Nowhere to run!
    stage2(); //Start stage 2 again
  } else if (option === 'A') { //if FIGHT
    let enemyHP = 60;
    if (player.Type === 'fire') {
      while (enemyHP > 0) {
        let fight = prompt(messages.S2C, []); //which attack?
          fight = fight.toUpperCase();
        if (fight === 'A') {
          enemyHP -= 15;
        } else if (fight === 'B') {
          enemyHP -= 30;
        } else {
          alert(messages.Error);
          continue;          //This continues the loop where we left off if user does not enter a correct input
        }
        if (enemyHP > 0) {
          alert(messages.TA); //The enemy is weakened
          alert(myArray.battleComments()); // random comment
          alert(messages.TA1); // Your turn to attack
          // Enemy weakened, attack not strong enough. Try again!
        }
      }
      alert(messages.S2D);
      // Congratulations! You've successfully defeated Bulbasaur and its trainer.
      stage3(); // On to next stage
    } else if (player.Type === 'grass') {
       while (enemyHP > 0) {
        let fight = prompt(messages.S2C, []);
          fight = fight.toUpperCase();
        if (fight === 'A') {
          enemyHP -= 15;
        } else if (fight === 'B') {
          enemyHP -= 25;
        } else {
          alert(messages.Error);
          continue;     //This continues the loop where we left off if user does not enter a correct input
        }
        if (enemyHP > 0) {
          alert(messages.TA); //The enemy is weakened
          alert(myArray.battleComments()); // random comment
          alert(messages.TA1); // Your turn to attack
        }
      }
      alert(messages.S2D);
      stage3();
    } else if (player.Type === 'water') {
       while (enemyHP > 0) {
        let fight = prompt(messages.S2C, []);
          fight = fight.toUpperCase();
        if (fight === 'A') {
          enemyHP -= 15;
        } else if (fight === 'B') {
          enemyHP -= 10;
        } else {
          alert(messages.Error);
          continue;     //This continues the loop where we left off if user does not enter a correct input
        }
        if (enemyHP > 0) {
          alert(messages.TA); //The enemy is weakened
          alert(myArray.battleComments()); // random comment
          alert(messages.TA1); // Your turn to attack
        }
      }
      alert(messages.S2D);
      stage3();
    }
  } else {
    alert(messages.Error);
    stage2();
  }
}

function stage3 () {
  //Stage 3: You need food. Eat berries or photosynthesize.
  //water and fire type die if photosyntheize, grass dies if eat berries
  let option = prompt(messages.S3A, []);
    option = option.toUpperCase();
  if (option === 'A') { //if eat berries
    if (player.Type === 'grass') {
      alert(messages.S3D); //Die of guilt
      gameOver();
    } else if (player.Type === 'fire' || player.Type === 'water') {
      alert(messages.S3B); //Gain energy
      stage4(); //On to next stage
    }  } else if (option === 'B') { //if photosynthesize
    if (player.Type === 'grass') {
      alert(messages.S3E); //Gain energy
      stage4(); //On to next stage
    } else if (player.Type === 'fire' || player.Type === 'water') {
      alert(messages.S3C); //Die of dysentery
       gameOver();
    }
  } else {
    alert(messages.Error);
    stage3();
  }
}

function stage4 () {
  //Stage 4: Run into a stronger Pokémon, Charizard, fire type.
  //only option is to run unless water type
  let option = prompt(messages.S4A, []);
   option = option.toUpperCase();
  if (option === "A") { // if FIGHT
    let enemyHP = 100;
    if (player.Type === "water") {
      while (enemyHP > 0) {
       let fight = prompt(messages.S2C , [])
        fight = fight.toUpperCase();
        if (fight === 'A') {
           enemyHP -= 15;
         } else if (fight === 'B') {
            enemyHP -= 35;
         } else {
           alert(messages.Error);
           continue;          //This continues the loop where we left off if user does not enter a correct input
         }
        if (enemyHP > 0) {
          alert(messages.TA); //The enemy is weakened
          alert(myArray.battleComments()); // random comment
          alert(messages.TA1); // Your turn to attack
        }
      }
      alert(messages.S4B); //Success!
    } else if (player.Type === "fire" || player.Type === "grass") {
      alert(messages.S4C); //Attacks have no affect!
      alert(myArray.battleComments()); 
      stage4();
    }
  } else if (option === "B") { // if RUN
    alert(messages.S4D); //Ran away!
  } else {
    alert(messages.Error);
    stage4();
  }
  alert(messages.SBA); //*SUSPENSEFUL MUSIC*
  alert(messages.SBB1); //Sophie-mon appears
  alert(messages.SBB2); //Sophie-mon insults you
   stageBoss(); //On to next stage.
}

function stageBoss () {
  //Stage Boss: Boss stage - we run into Sophie-Mon, a JavaScript type pokemon
  //you must fight
  let option = prompt(messages.SBB3, []); //Battle Sophie-mon
   option = option.toUpperCase();
  if (option === "A") { // if FIGHT
    let enemyHP = 175;
      while (enemyHP > 0) {
       let fight = prompt(messages.S2C , [])
        fight = fight.toUpperCase();
        if (fight === 'A') {
           enemyHP -= 30;
         } else if (fight === 'B') {
            enemyHP -= 45;
         } else {
           alert(messages.Error);
           continue; //This continues the loop where we left off if user does not enter a correct input
         }
        if (enemyHP > 0) {
          alert(messages.TA); //The enemy is weakened
          alert(myArray.battleComments()); // random comment
          alert(messages.TA1); // Your turn to attack
        }
      }
      alert(messages.SBS1); //Sophie-mon defeated
      alert(messages.SBS2a);//Sophie-mon Speech!
      alert(messages.SBS2b);//Sophie-mon Speech!
      alert(messages.SBS3a); //Sophie-mon goodbye
      alert(messages.SBS3b); //Sophie-mon goodbye
  
  } else if (option === "B") { // if RUN
    alert(messages.SBC); //You can't run from the Boss!
    stageBoss()
  } else {
    alert(messages.Error);
    stageBoss();
  }
    stageFinal(); //On to next stage.
}

function stageFinal () {
  //Final Stage: Surprise! Everyone Dies stage.
  alert(messages.SFA);
  //eerie music starts playing
  alert(messages.SFB);
  alert(messages.SFC);
  alert(messages.SFD);
  alert(messages.SFE);
  alert(messages.SFF); //All your imagination
  alert(messages.SFG); //You have died of dysentery.
  alert(messages.SFH); //FIN
  // gameOver();
  let playAgain = confirm('Would you like to play again?')
      if (playAgain) {
          beginGame();
        } 
        else {
          throw new Error("game is over");
  //We tried to use our gameOver function but the game always repeats the last function once unless we throw the error.
        } 
}

beginGame();

/**
Items that could have been nice to make:
- Add more stages
- End game without error
 */
