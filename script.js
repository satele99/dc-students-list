
let buttonId = [];
let addRoster = document.getElementById('add-students');
let removeButton = document.getElementsByClassName('remove-button');


function addNames() {
    let names = document.getElementById('student-input').value;
    const addStudentButton = document.getElementById('student-submit');
    const pDiv = document.getElementById('div-p');
    let namesDiv = document.getElementById('students');
    let studentDiv = document.createElement('div');
    let studentCards = document.createElement('div');
    let cardButton = document.createElement('button');
    let cardP = document.createElement('p');
    let cardP2 = document.createElement('p');
    let inputCheck = document.createElement('input');
    
    
    if(names == ""){
        alert("No name entered.")
    }
    else {
        let newArray = names.replaceAll(' ', '').split(',');

        for(i = 0; i < newArray.length; i++){
            namesDiv = document.getElementById('students');
            studentDiv = document.createElement('div');
            studentCards = document.createElement('div');
            cardButton = document.createElement('button');
            cardP = document.createElement('p');
            cardP2 = document.createElement('p');
            inputCheck = document.createElement('input');
            let word = newArray[i];
            let capitalizedWord = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
            namesDiv.append(studentDiv);
            studentDiv.className = 'student-cards';
            studentDiv.appendChild(studentCards);
            studentCards.className = 'cards';
            studentCards.appendChild(cardP);
            cardP.innerText = capitalizedWord;
            studentCards.appendChild(inputCheck);
            inputCheck.type = 'checkbox';
            studentCards.appendChild(cardButton);
            cardButton.className = "remove-button";
            cardButton.id = 'button' + i;
            cardButton.innerText = "X";
            buttonId.push(cardButton.id);
        } 
        document.getElementById('student-input').value = "";
    } 
    console.log(buttonId);
}


// removeButton.addEventListener('click', () => {
//     alert('hello');
// })

