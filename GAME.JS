let userScore = 0;
let comScore = 0;

const userScorePara=document.querySelector('#user-score')
const comScorePara=document.querySelector('#com-score')

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const genComChoice = () =>{
      const options = ['rock','paper','scissor'];
      const randIdx=Math.floor(Math.random()*3)
      return options[randIdx]
}

const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        console.log('YOU WON')
        msg.innerText=`YOU WON !! YOUR ${userChoice} BEATS ${comChoice}`
        msg.style.backgroundColor='green';
    }else{
        comScore++
        comScorePara.innerText=comScore;
        console.log('YOU LOSE')
        msg.innerText=`YOU LOST !! ${comChoice} BEATS YOUR ${userChoice}`
        msg.style.backgroundColor='red';
    }
}

const drawGame=()=>{
    console.log("GAME WAS DRAW")
    msg.innerText='GAME WAS DRAW . TRY AGAIN !!'
    msg.style.backgroundColor='rgba(0,0,0,0.5)'
}

const playGame = (userChoice) =>{
      console.log('User Choice :',userChoice)
      //generate computer choice
      const comChoice=genComChoice()
      console.log('Computer Choice',comChoice)

      //Choices
      if(userChoice === comChoice){
        drawGame()
      }else{
        let userWin=true;
        if(userChoice === 'rock'){
            //scissor,paper
            userWin=comChoice === 'paper' ? false: true;
        }else if(userChoice === 'paper'){
            //rock,scissor
            userWin=comChoice === 'scissor'?false:true;
        }else{
            userWin=comChoice === 'rock'?false:true;
        }
        showWinner(userWin,userChoice,comChoice)
      }
} 

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener('click',()=>{
           const userChoice=choice.getAttribute('id')
           playGame(userChoice);
    })
})