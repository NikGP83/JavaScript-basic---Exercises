const createNewString = (str) => {
    if (str.length >= 3) {
        let lastThreeChr = str.substr(-3);
        return lastThreeChr + str + lastThreeChr;
    }
};

console.log(createNewString(`уникум`))