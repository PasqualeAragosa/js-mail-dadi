const emailList = [
    'pasqualearagosa@boolean.it',
    'annaaragosa@boolean.it',
    'angeloaragosa@boolean.it'
]

const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click',
    function () {
        const userEmail = document.getElementById('email').value;
        const boxEl = document.querySelector('.check_mail');
        //console.log(boxEl);
        let issue = `Account inesistente!`;

        for (let i = 0; i < emailList.length; i++) {
            if (emailList[i] === userEmail) {
                issue = `Log-in effettuato!`;
            }
        }

        boxEl.innerHTML = issue;
        
        const userNum = Math.floor((Math.random() * 6) + 1);
        const pcNum = Math.floor((Math.random() * 6) + 1);
        const diceEl = document.querySelector('.check_dice');
        console.log(userNum, pcNum);
        const userEl = document.querySelector('.user');
        const pcEl = document.querySelector('.pc');
        
        userEl.innerHTML = userNum;
        pcEl.innerHTML = pcNum;
        
        if (userNum > pcNum) {
            diceEl.innerHTML = `Hai vinto!`;
        } else if (pcNum > userNum) {
            diceEl.innerHTML = `Hai perso!`;
        } else {
            diceEl.innerHTML = `Pareggio!`;
        }
    }
)




