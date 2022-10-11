const emailList = [
    'pasqualearagosa@boolean.it',
    'annaaragosa@boolean.it',
    'angeloaragosa@boolean.it',
    'francescoaragosab@boolean.it',
    'antonellaaragosa@boolean.it',
    'matteoaragosa@boolean.it',
    'caterinaaragosa@boolean.it',
    'marioaragosa@boolean.it',
    'biagioaragosa@boolean.it'
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
        //alert(issue);
        boxEl.insertAdjacentHTML('beforeend', issue);
        
        const userNum = Math.floor((Math.random() * 6) + 1);
        const pcNum = Math.floor((Math.random() * 6) + 1);
        const diceEl = document.querySelector('.check_dice');
        console.log(userNum, pcNum);
        
        if (userNum > pcNum) {
            diceEl.insertAdjacentHTML('beforeend', `Hai vinto!`);
        } else if (pcNum > userNum) {
            diceEl.insertAdjacentHTML('beforeend', `Hai perso!`);
        } else {
            diceEl.insertAdjacentHTML('beforeend', `Pareggio!`);
        }
    }
)




