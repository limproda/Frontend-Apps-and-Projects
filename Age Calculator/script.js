const btn = document.getElementById("btn");
const text = document.getElementsByClassName("text")[0];

// Function used to delete elements if they where created 
function deleteElements() {
    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }
}

// Function used to print the age of the person
function printAge(difference) {

    // In case we need to delete text from previous uses
    deleteElements();

    // Create and print the first text
    let age = document.createElement("p");
    age.innerHTML = "You have " + difference.years() + " years, " + difference.months() + " months and " + difference.days() + " days";
    age.classList.add("paragraph");
    text.appendChild(age);

    // Create and print the second text
    let timeAlive = document.createElement("p");
    timeAlive.innerHTML = "You have been alive for " + difference.asYears().toFixed(2) + " years, " +
                    difference.asDays().toFixed(2) + " days, " +
                    difference.asHours().toFixed(2) + " hours or " +
                    difference.asMinutes().toFixed(2) + " minutes.";
    timeAlive.classList.add("paragraph");
    text.appendChild(timeAlive);
}


// Function used to calculate the age
function calculateAge(date) {
    // Date and hour for now
    let now = moment();
    // Difference between now and the date added by the user
    let difference = moment.duration(now.diff(date));

    // If there is a positive difference, we print the date
    if (difference > 0) {
        printAge(difference);
    } else {
        // If not, the date is incorrect
        alert("Date not correct!");
    }
}

// Event Listener
btn.addEventListener("click", function () {
    // Date added by the user
    const date = new Date(document.getElementById("date").value);
    const dateMoment = moment(date, 'YYYY-MM-DD');
    
    calculateAge(dateMoment);
}, false);

