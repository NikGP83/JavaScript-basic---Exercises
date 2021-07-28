const checkAndRemoveWord = (sentence) => {
    if (sentence.indexOf(`Script`) === 4) {
        return sentence.replace(`Script`, ``)
    }
    else {
        return sentence;
    }
    
};

console.log(checkAndRemoveWord(`JavaScript`));