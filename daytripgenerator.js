"use strict";

/// List of destinations

let destinationArray = ["Seward", "Nome", "Juneau", "Anchorage"];
let restaurantArray = ["Sullivan's Steakhouse", "Alaska Seafood Grill", "Husky Restaurant", "The Hangar On The Wharf"];
let transportationArray = ["Car", "Plane", "Boat", "Bicycle"];
let entertainmentArray = ["attempt an escape room", "go to the movies", "go to wildlife conservation", "go sledding"];

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






randomizeDestination();
randomizeRestaurant();
randomizeTransportation();
randomizeEntertainment();

console.log(`Destination: ${randomizeDestination()}, Restaurant: ${randomizeRestaurant()}, Transportation: ${randomizeTransportation()}, Entertainment: ${randomizeEntertainment()} `);