"use strict";

/// List of destinations

let destinationArray = ["Seward", "Nome", "Juneau", "Anchorage"];
let restaurantArray = ["Sullivan's Steakhouse", "Alaska Seafood Grill", "Husky Restaurant", "The Hangar On The Wharf"];
let transportationArray = ["Car", "Plane", "Boat", "Alaska Railroad"];
let entertainmentArray = ["Attempt An Escape Room", "Go To The Movies", "Go To Wildlife Conservation", "Visit Museum"];

// Functions to create random day trip

let random = Math.floor(Math.random() * 4);

function randomizeDestination()
{
    switch(random)
    {
        case 0:
            return destinationArray[0];
        case 1:
            return destinationArray[1];
        case 2:
            return destinationArray[2];
        case 3:
            return destinationArray[3];
        default:
            return "Error. Please try again."
    }
}

function randomizeRestaurant()
{
    switch(random)
    {
        case 0:
            return restaurantArray[0];
        case 1:
            return restaurantArray[1];
        case 2:
            return restaurantArray[2];
        case 3:
            return restaurantArray[3];
        default:
            return "Error. Please try again."
    }

}

function randomizeTransportation()
{
    switch(random)
    {
        case 0:
            return transportationArray[0];
        case 1:
            return transportationArray[1];
        case 2:
            return transportationArray[2];
        case 3:
            return transportationArray[3];
        default:
            return "Error. Please try again."
    }

}

function randomizeEntertainment()
{
    switch(random)
    {
        case 0:
            return entertainmentArray[0];
        case 1:
            return entertainmentArray[1];
        case 2:
            return entertainmentArray[2];
        case 3:
            return entertainmentArray[3];
        default:
            return "Error. Please try again."
    }
}

/// ASSIGN DROPDOWN OPTIONS
// Destination

let sortedDestination = destinationArray.sort();

document.getElementById("location-1").value = sortedDestination[0];
document.getElementById("location-2").value = sortedDestination[1];
document.getElementById("location-3").value = sortedDestination[2];
document.getElementById("location-4").value = sortedDestination[3];

// Transportation
let sortedTransportation = transportationArray.sort();

document.getElementById("transportation-1").value = transportationArray[0];
document.getElementById("transportation-2").value = transportationArray[1];
document.getElementById("transportation-3").value = transportationArray[2];
document.getElementById("transportation-4").value = transportationArray[3];

// Entertainment
let sortedEntertainment = entertainmentArray.sort();

document.getElementById("entertainment-1").value = sortedEntertainment[0];
document.getElementById("entertainment-2").value = sortedEntertainment[1];
document.getElementById("entertainment-3").value = sortedEntertainment[2];
document.getElementById("entertainment-4").value = sortedEntertainment[3];

// Restaurant
let sortedRestaurant = restaurantArray.sort();

document.getElementById("restaurant-1").value = sortedRestaurant[0];
document.getElementById("restaurant-2").value = sortedRestaurant[1];
document.getElementById("restaurant-3").value = sortedRestaurant[2];
document.getElementById("restaurant-4").value = sortedRestaurant[3];

// Event Listeners

//Random Button Function
const randomClick = document.getElementById("random-button").addEventListener("click", function(){
    document.getElementById("destination-input").value = randomizeDestination();
    document.getElementById("entertainment-input").value = randomizeEntertainment();
    document.getElementById("restaurant-input").value = randomizeRestaurant();
    document.getElementById("transportation-input").value = randomizeTransportation();
});

//Confirm Trip Button

const confirmRandomPlanClick = document.getElementById('confirm-button').addEventListener("click", function(){
    console.log(`User Trip == 
Destination:${document.getElementById('destination-input').value},
Transportation:${document.getElementById('transportation-input').value},
Entertainment:${document.getElementById('entertainment-input').value},
Restaurant:${document.getElementById('restaurant-input').value}`)
;
    alert("Trip Confirmed! Enjoy your day in the Last Frontier!");
});

const confirmUserPlanClick = document.getElementById('confirm-button-user').addEventListener("click", function(){
    console.log(`User Trip == 
Destination:${document.getElementById('destination-user').value},
Transportation:${document.getElementById('transportation-user').value},
Entertainment:${document.getElementById('entertainment-user').value},
Restaurant:${document.getElementById('restaurant-user').value}`)
;
    alert("Trip Confirmed! Enjoy your day in the Last Frontier!");
});