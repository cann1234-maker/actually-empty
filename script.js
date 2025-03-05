let day = 1;
let distance = 0;
let food = 100;
let health = "Good";

const dayElement = document.getElementById("day");
const distanceElement = document.getElementById("distance");
const foodElement = document.getElementById("food");
const healthElement = document.getElementById("health");
const eventMessageElement = document.getElementById("event-message");

document.getElementById("travel-button").addEventListener("click", () => {
    travel();
});

document.getElementById("rest-button").addEventListener("click", () => {
    rest();
});

document.getElementById("hunt-button").addEventListener("click", () => {
    hunt();
});

function travel() {
    day++;
    distance += Math.floor(Math.random() * 10) + 1;
    food -= Math.floor(Math.random() * 5) + 1;
    checkHealth();
    updateStatus();
    eventMessageElement.textContent = "You traveled for a day.";
}

function rest() {
    day++;
    food -= Math.floor(Math.random() * 3) + 1;
    health = "Good";
    updateStatus();
    eventMessageElement.textContent = "You rested for a day.";
}

function hunt() {
    day++;
    const foodGained = Math.floor(Math.random() * 20) + 5;
    food += foodGained;
    updateStatus();
    eventMessageElement.textContent = `You hunted and gained ${foodGained} food.`;
}

function checkHealth() {
    if (food <= 0) {
        food = 0;
        health = "Poor";
        eventMessageElement.textContent = "You are out of food!";
    } else if (food < 20) {
        health = "Fair";
    } else {
        health = "Good";
    }
}

function updateStatus() {
    dayElement.textContent = `Day: ${day}`;
    distanceElement.textContent = `Distance Traveled: ${distance} miles`;
    foodElement.textContent = `Food: ${food}`;
    healthElement.textContent = `Health: ${health}`;
}
