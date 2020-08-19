/// 1 ///

const arr = (arr) => [...arr].reverse();

// console.log(arr([1, 2, 3]));

//// 2 ////

const arrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(arrays([1, 2, 3], [4, 5, 6]));

//// 3 ////

function logInfo(city) {
    let { name, country, population: numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

// logInfo(
//     (city = {
//         name: "Perm",
//         country: "Russia",
//         population: "1.007 million people",
//     })
// );

/// 4 ///

var city1 = {
    name: "Minsk",
    country: "Belorus",
};

var city2 = {
    name: "Berlin",
    country: "Germany",
};

function getNameAndCountry(obj) {
    return [obj.name, obj.country];
}

function getRelocatedCity(city1, city2) {
    if (city2.country === "Germany") {
        // console.log(getNameAndCountry(city2)[1]);
        city1.country = getNameAndCountry(city2)[1];
        // console.log(city1);
        return city1;
    }
}
getRelocatedCity(city1, city2);
