const faceof=document.getElementById('face')

const bodyof=document.getElementById('bodyhangman')
const leftarm =document.getElementById('leftarm')
const rightarm=document.getElementById('rightarm')
const leftleg=document.getElementById('leftleg')
const rightleg=document.getElementById('rightleg')

const wordd = document.getElementById('guessword');
const triesbar = document.getElementById('tries');

const divElements = document.querySelectorAll('.alphabets');


const gamestatus = document.getElementById('status');
const wrongbar = document.getElementById('wrongs');
const hints=document.getElementById('hints');
const statusdiv=document.querySelector('.statusdiv');
const letters=document.getElementById('letters');
const buttonforhint=document.getElementById('hintbut')


var wordbank=["SALSA","LONDON", "IGLOO","VIOLIN","POPCORN","AMERICA","MONEY","APPLE","BROOM","CLOCK"]
var hint=[" Latin dance associated with the music genre of the same name",
"largest metropolis in the United Kingdom","A dome-shaped shelter made from blocks of ice and snow","Musical Instrument","Cinema","52 stars","Bank","To keep you away from doctor","Witch","Time"]


var number1=Math.floor(Math.random() * 10);
var word=wordbank[number1];
hints.innerHTML=hint[number1];
 buttonforhint.addEventListener("click",()=>{

    hints.style.display="block"
  
  })


var length = word.length;

letters.innerHTML=length;
var tries = length + 3;
var wrongs = 0;
var wordspace = "-";


for (var i=0;i<length;i++){
    wordspace+="-"
}

divElements.forEach(div => {
  div.addEventListener("click", () => {
   
    if (tries > 0) {
      var n = div.innerHTML;
      var newWordspace ="";
      tries -= 1;
     
    

      for (var j = 0; j < word.length; j++) {
        if (n === word[j]) {
          newWordspace += word[j];
        } else {
          newWordspace += wordspace[j];
        }
      }
    
      if (!word.includes(n)) {
        wrongs += 1;
     
      }


      if (wrongs==1){

        faceof.style.display="block";
    
    }

    

      wordspace = newWordspace;
      wordd.innerHTML = wordspace;
      triesbar.innerHTML = tries;

      div.classList.add("disable")
 
      if (tries === 0 && wordspace !== word) {
        statusdiv.style.display="block";
        gamestatus.innerHTML = `You lost. The word was ${word}`;

      }

      if (tries >= 0 && wordspace === word) {
        statusdiv.style.display="block";
        gamestatus.innerHTML = `Congratulations! The word is ${word}`;
      }



    

    if (wrongs==2){

        faceof.style.display="block";
        bodyof.style.display="block"
    
    }

    if (wrongs==3){

        faceof.style.display="block";
        bodyof.style.display="block"
         leftarm.style.display="block"
    }

    if (wrongs==4){

        faceof.style.display="block";
        bodyof.style.display="block"
        leftarm.style.display="block"
        rightarm.style.display="block"
    }

    if (wrongs==5){

        faceof.style.display="block";
        bodyof.style.display="block"
        leftarm.style.display="block"
        rightarm.style.display="block"
        leftleg.style.display="block"
    }

    if (wrongs==6){

        faceof.style.display="block";
        bodyof.style.display="block"
        leftarm.style.display="block"
        rightarm.style.display="block"
        leftleg.style.display="block"
        rightleg.style.display="block"
    }

  


    


     
  
    }



  });
});





 const resetbutton=document.getElementById('reset');
 
 resetbutton.addEventListener("click", () => {
    
  location.reload();
    // statusdiv.style.display="none";
    
    // tries = length + 3;
    // wrongs = 0;
    // wordspace = "-".repeat(length);
    // number1=Math.floor(Math.random() * 10);
  

    // wrongbar.innerHTML = `${wrongs}`;
    // wordd.innerHTML = wordspace;
    // triesbar.innerHTML = tries;
    // gamestatus.innerHTML = "";
  

    // divElements.forEach(div => {
    //   div.classList.remove("disable");
    // });
  });




 