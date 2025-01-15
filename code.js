var selectedChoices = {
    void: null,
    "locationType": 0,
    "houseType": 0,
    "movingCompany": 0,
    "jobField": 0,
    "job": 0,
    "occupants": 0
};

function startGame() {
    document.getElementById("HowToPlay").style.display = "none";
    document.getElementById("Game").style.display = "block";
    goToQuestion("locationType","void",0);
}

function goToQuestion(location, oldLocation, choiceNumber) {
    selectedChoices[oldLocation.replace("<br>","")] = choiceNumber;
    if(location == "end") {
        endGame();
        return;
    }

    document.getElementById("Game").style.display = "block";
    document.getElementById("EndGame").style.display = "none";
    document.getElementById("prompt").innerHTML = choices[location].prompt;

    switch (location) {
        case "houseType":
            optionSet = choices.locationType.options[0][selectedChoices.locationType].goToSet;
            break;
        case "job":
            optionSet = choices.jobField.options[0][selectedChoices.jobField].goToSet;
            break;
        default:
            optionSet = 0;
            break;
    }
    document.getElementById("options").innerHTML = `
        <div>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[optionSet][0].goTo}', '${choices[location].name}', 0);" id="option1">
                <span class="choiceName">${choices[location].options[optionSet][0].name}</span>
                <br><br>
                <p class="description">${choices[location].options[optionSet][0].cost}</p>
                <p class="description">${choices[location].options[optionSet][0].rent}</p>
            </button>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[optionSet][1].goTo}', '${choices[location].name}', 1);" id="option2">
                <span class="choiceName">${choices[location].options[optionSet][1].name}</span>
                <br><br>
                <p class="description">${choices[location].options[optionSet][1].cost}</p>
                <p class="description">${choices[location].options[optionSet][1].rent}</p>
            </button>
        </div>
        <div>
            <br><br>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[optionSet][2].goTo}', '${choices[location].name}', 2);" id="option3">
                <span class="choiceName">${choices[location].options[optionSet][2].name}</span>
                <br><br>
                <p class="description">${choices[location].options[optionSet][2].cost}</p>
                <p class="description">${choices[location].options[optionSet][2].rent}</p>
            </button>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[optionSet][3].goTo}', '${choices[location].name}', 3);" id="option4">
                <span class="choiceName">${choices[location].options[optionSet][3].name}</span>
                <br><br>
                <p class="description">${choices[location].options[optionSet][3].cost}</p>
                <p class="description">${choices[location].options[optionSet][3].rent}</p>
            </button>
        </div>
    `;
    if(oldLocation !=- "void") {
        for(var i = 0; i < choices[location].options.length; i++) {
            for(var j = 0; j < choices[location].options[i].length; j++) {
                choices[location].options[i][j].goTo = "end";
            }
        }
    }
}

function endGame() {
    document.getElementById("Game").style.display = "none";
    document.getElementById("EndGame").style.display = "inline";
    
    optionSet = 0;
    document.getElementById("chosenLocationType").innerHTML = `
        <span>${choices.locationType.options[0][selectedChoices.locationType].name}</span>
        <br><br>
        <p class="description">
            ${choices.locationType.options[0][selectedChoices.locationType].cost}
            <br>
            ${choices.locationType.options[0][selectedChoices.locationType].rent}
        </p>
   `;
    optionSet = choices.locationType.options[0][selectedChoices.locationType].goToSet;
    document.getElementById("chosenHouseType").innerHTML = `
        <span>${choices.houseType.options[optionSet][selectedChoices.houseType].name}</span>
        <br><br>
        <p class="description">
            ${choices.houseType.options[optionSet][selectedChoices.houseType].cost}
            <br>
            ${choices.houseType.options[optionSet][selectedChoices.houseType].rent}
            </p>
    `;
    document.getElementById("chosenMovingCompany").innerHTML = `
        <span>${choices.movingCompany.options[0][selectedChoices.movingCompany].name}</span>
        <br><br>
        <p class="description">
            ${choices.movingCompany.options[0][selectedChoices.movingCompany].cost}
            <br>
            ${choices.movingCompany.options[0][selectedChoices.movingCompany].rent}
        </p>
    `;
    document.getElementById("chosenJobField").innerHTML = `
        <span>${choices.jobField.options[0][selectedChoices.jobField].name}</span>
        <br><br>
        <p class="description">
            ${choices.jobField.options[0][selectedChoices.jobField].cost}
            <br>
            ${choices.jobField.options[0][selectedChoices.jobField].rent}
            </p>
    `;
    optionSet = choices.jobField.options[0][selectedChoices.jobField].goToSet;
    document.getElementById("chosenJob").innerHTML = `
        <span>${choices.job.options[optionSet][selectedChoices.job].name}</span>
        <br><br>
        <p class="description">
            ${choices.job.options[optionSet][selectedChoices.job].cost}
            <br>
            ${choices.job.options[optionSet][selectedChoices.job].rent}
        </p>
    `;
    document.getElementById("chosenOccupants").innerHTML = `
        <span>${choices.occupants.options[0][selectedChoices.occupants].name}</span>
        <br><br>
        <p class="description">
            ${choices.occupants.options[0][selectedChoices.occupants].cost}
            <br>
            ${choices.occupants.options[0][selectedChoices.occupants].rent}
        </p>
    `;
    document.getElementById("analysis").innerHTML = getAnalysis();
}

function getAnalysis() {
    cost1 = choices.houseType.options[choices.locationType.options[0][selectedChoices.locationType].goToSet][selectedChoices.houseType].cost.replaceAll("Cost: ", "").replaceAll("$","").replaceAll(",","")

    return `
        ${
            choices.houseType.options[choices.locationType.options[0][selectedChoices.locationType].goToSet][selectedChoices.houseType].description
        } You chose ${
            choices.movingCompany.options[0][selectedChoices.movingCompany].name
        } for your moving company which will cost you ${
            choices.movingCompany.options[0][selectedChoices.movingCompany].cost.replaceAll("Cost: ","")
        }${
            choices.job.options[choices.jobField.options[0][selectedChoices.jobField].goToSet][selectedChoices.job].description
        } ${
            choices.occupants.options[0][selectedChoices.occupants].description
        }
        
    `;
}