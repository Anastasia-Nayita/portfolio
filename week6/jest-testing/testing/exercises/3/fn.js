module.exports = function fn(val) {
    if (Array.isArray(val)) {
        let newArr = [];
        val.forEach((item) => {
            newArr.push(fn(item));
        });
        return newArr;
    } else if (typeof val === "string") {
        return [...val].reverse().join("");
    } else {
        return null;
    }
};
