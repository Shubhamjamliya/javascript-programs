//program of  SNAKE,WATER,GUN-GAME  

let  options=["snake","water","gun"]; 

let chance=0;        
let score_your=0;       //your score
let score_comp=0;       //computers score

while(chance !=5) {
    let randomwords=options[Math.floor(Math.random()*options.length)];//give random options to randomwords
    
    let ans=prompt("enter(s=snake,w=water,g=gun):");     //option entered by the user

    
    if(ans=="s") {                     //if user entered snake 
        if(randomwords=="water") {
            console.log("you won");
            score_your++;
           
        }
       else if(randomwords=="gun") {
            console.log("you loss!!");
            score_comp++;    
           
        }
        else if(randomwords=="snake") {
            console.log("same");
            continue;
        }
        chance++;
               }

else if(ans=="w") {                     //if user entered water
    if(randomwords=="snake") {
        console.log("you loss!!");
        score_comp++;
    }
    else if(randomwords=="gun") {
        console.log("you won");
        score_your++;    
    }
    else if(randomwords=="water") {
        console.log("same");
        continue;
    }
    chance++;
}

            
else if(ans=="g") {                   //if user entered gun
    if(randomwords=="snake") {
        console.log("you loss!!");
        score_comp++;
    }
    else if(randomwords=="water") {
        console.log("you won");
        score_your++;    
    }
    else if(randomwords=="gun") {
        console.log(" same");
    continue;
    }
    chance++;
}
}

if(score_your>score_comp) {
console.log("YOU WON!!,your score is:",score_your);
console.log("computer-score=",score_comp);   
}else {
    console.log("COMPUTER WON!!,it's score is:",score_comp);
    console.log("your score=",score_your);   
}