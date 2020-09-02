const countries = require("./countries");
test("When find is passed an empty string, it returns an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

///instead toBe - toEqual
///ArrMethods : length

test("The array that it returns contains no more than four matches", () => {
    const result = countries.find("a");
    expect(result.length).toEqual(4);
});

test("The search is case insensitive", () => {
    const result = countries.find("ZaMbIa");
    expect(result).toEqual(["Zambia"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    const result = countries.find("TadaDADAM");
    expect(result).toEqual([]);
});
