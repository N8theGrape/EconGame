var selectedChoices = {
    void: null,
    "locationType": 0,
    "houseType": 0,
    "movingCompany": 0,
    "job": 0,
    "occupants": 0
};  ''

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

    document.getElementById("options").innerHTML = `
        <div>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[0].goTo}', '${choices[location].name}', 0);" id="option1">
                <span class="choiceName">${choices[location].options[0].name}</span>
                <p class="description">${choices[location].options[0].cost}</p>
                <br>
                <p class="description">
                    ${choices[location].options[0].description}
                </p>
            </button>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[1].goTo}', '${choices[location].name}', 1);" id="option2">
                <span class="choiceName">${choices[location].options[1].name}</span>
                <p class="description">${choices[location].options[1].cost}</p>
                <br>
                <p class="description">
                    ${choices[location].options[1].description}
                </p>
            </button>
        </div>
        <div>
            <br><br>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[2].goTo}', '${choices[location].name}', 2);" id="option3">
                <span class="choiceName">${choices[location].options[2].name}</span>
                <p class="description">${choices[location].options[2].cost}</p>
                <br>
                <p class="description">
                    ${choices[location].options[2].description}
                </p>
            </button>
            <button class="option choiceButton" onclick="goToQuestion('${choices[location].options[3].goTo}', '${choices[location].name}', 3);" id="option4">
                <span class="choiceName">${choices[location].options[3].name}</span>
                <p class="description">${choices[location].options[3].cost}</p>
                <br>
                <p class="description">
                    ${choices[location].options[3].description}
                </p>
            </button>
        </div>
    `;
    if(oldLocation !=- "void") {
        choices[location].options[0].goTo = "end";
        choices[location].options[1].goTo = "end";
        choices[location].options[2].goTo = "end";
        choices[location].options[3].goTo = "end";
    }
}

function endGame() {
    document.getElementById("Game").style.display = "none";
    document.getElementById("EndGame").style.display = "inline";
    document.getElementById("chosenLocationType").innerHTML = `
        <span>${choices.locationType.options[selectedChoices.locationType].name}</span>
        <p class="description">${choices.locationType.options[selectedChoices.locationType].cost}</p>
        <br>
        <p class="description">
            ${choices.locationType.options[selectedChoices.locationType].description}
        </p>
   `;
    document.getElementById("chosenHouseType").innerHTML = `
        <span>${choices.houseType.options[selectedChoices.houseType].name}</span>
        <p class="description">${choices.houseType.options[selectedChoices.houseType].cost}</p>
        <br>
        <p class="description">
            ${choices.houseType.options[selectedChoices.houseType].description}
        </p>
    `;
    document.getElementById("chosenMovingCompany").innerHTML = `
        <span>${choices.movingCompany.options[selectedChoices.movingCompany].name}</span>
        <p class="description">${choices.movingCompany.options[selectedChoices.movingCompany].cost}</p>
        <br>
        <p class="description">
            ${choices.movingCompany.options[selectedChoices.movingCompany].description}
        </p>
    `;
    document.getElementById("chosenJob").innerHTML = `
        <span>${choices.job.options[selectedChoices.job].name}</span>
        <p class="description">${choices.job.options[selectedChoices.job].cost}</p>
        <br>
        <p class="description">
            ${choices.job.options[selectedChoices.job].description}
        </p>
    `;
    document.getElementById("chosenOccupants").innerHTML = `
        <span>${choices.occupants.options[selectedChoices.occupants].name}</span>
        <p class="description">${choices.occupants.options[selectedChoices.occupants].cost}</p>
        <br>
        <p class="description">
            ${choices.occupants.options[selectedChoices.occupants].description}
        </p>
    `;
}