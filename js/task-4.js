function getShippingCost(country){

    let cost = "Sorry, there is no delivery to your country";



if(country === "China"){
    cost = 100;
} else if(country === "Chile"){
    cost = 250;
} else if (country === "Australia"){
cost = 170;
} else if (country === "Jamaica"){
    cost = 120;
}


switch(country){
    case "Australia":
    case "Germany":
    case "China":
    case "Chile":
    case "Jamaica": 
    case "Sweden":
    return `Shipping to China will cost ${cost} credits`;
    default:
        return cost;

}
}



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
