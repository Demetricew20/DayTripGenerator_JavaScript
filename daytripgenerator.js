"use strict";

/// List of destinations

let destinationArray = ["Seward", "Nome", "Juneau", "Anchorage"];
let restaurantArray = ["Sullivan's Steakhouse", "Alaska Seafood Grill", "Husky Restaurant", "The Hangar On The Wharf"];
let transportationArray = ["Car", "Plane", "Boat", "Alaska Railroad"];
let entertainmentArray = ["Attempt An Escape Room", "Go To The Movies", "Go To Wildlife Conservation", "Go Sledding"];

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
// Event Listeners

//Random Button Function
const randomClick = document.getElementById("random-button").addEventListener("click", function(){
    document.getElementById("destination-input").value = randomizeDestination();
    document.getElementById("entertainment-input").value = randomizeEntertainment();
    document.getElementById("restaurant-input").value = randomizeRestaurant();
    document.getElementById("transportation-input").value = randomizeTransportation();
});


