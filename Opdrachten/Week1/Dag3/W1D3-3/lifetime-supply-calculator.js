const calculateSupply = function (age, amountPerDay) {
    const maxAge = 110;
    const maxNeeded = (amountPerDay * 365) *  (maxAge - age);
    let message = "You will need " + maxNeeded + " to last you until the ripe old age of " + maxAge;
    console.log(message);
};

calculateSupply(50, 65);
calculateSupply(23, 13);
calculateSupply(12, 25);