"use strict";
function toNgram(input, nOrder) {
    const nGram = {};
    const beginnings = [];
    // For every piece of text user inputs.
    for (let i = 0; i < input.length; i++) {
        const sentence = input[i];
        const words = sentence.split(" ");
        // Generate the beginnings array.
        let accumBeginnings = [];
        for (let j = 0; j < nOrder; j++) {
            accumBeginnings.push(words[j]);
        }
        beginnings.push(accumBeginnings.join(" "));
        // For each word in the text.
        for (let j = 0; j < words.length; j++) {
            // This is for higher NOrders above 1
            const accumArray = [];
            const accumWords = [];
            for (let k = 0; k < nOrder; k++) {
                accumArray.push(words[j + 1 + k]);
                accumWords.push(words[j + k]);
            }
            const accumWord = accumWords.join(" ");
            // Add data to the mf object.
            if (!nGram[accumWord]) {
                nGram[accumWord] = [accumArray.join(" ")];
            }
            else {
                nGram[accumWord] = nGram[accumWord].concat([accumArray.join(" ")]);
            }
        }
    }
    return { nGram, beginnings }; // W Confirmed;
}
function fromNgram(nGram, beginnings) {
    // Grab a random starting word(s)
    let query = beginnings[Math.floor(Math.random() * beginnings.length)];
    let result = query + " ";
    // Keep looping until it runs out of NGram results
    let looper = true;
    while (looper) {
        const gram = nGram[query];
        if (!gram || !gram.length) {
            looper = false;
            break;
        }
        // Takes a random NGram result and slaps it in the string
        const nextBit = gram[Math.floor(Math.random() * gram.length)];
        result += nextBit.split(" ")[nextBit.split(" ").length - 1] + " ";
        query = nextBit;
    }
    return result; // Insane W acquired
}
