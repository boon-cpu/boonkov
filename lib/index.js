"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromNgram = exports.toNgram = void 0;
function toNgram(input, nOrder) {
    var nGram = {};
    var beginnings = [];
    // For every piece of text user inputs.
    for (var i = 0; i < input.length; i++) {
        var sentence = input[i];
        var words = sentence.split(" ");
        // Generate the beginnings array.
        var accumBeginnings = [];
        for (var j = 0; j < nOrder; j++) {
            accumBeginnings.push(words[j]);
        }
        beginnings.push(accumBeginnings.join(" "));
        // For each word in the text.
        for (var j = 0; j < words.length; j++) {
            // This is for higher NOrders above 1
            var accumArray = [];
            var accumWords = [];
            for (var k = 0; k < nOrder; k++) {
                accumArray.push(words[j + 1 + k]);
                accumWords.push(words[j + k]);
            }
            var accumWord = accumWords.join(" ");
            // Add data to the mf object.
            if (!nGram[accumWord]) {
                nGram[accumWord] = [accumArray.join(" ")];
            }
            else {
                nGram[accumWord] = nGram[accumWord].concat([accumArray.join(" ")]);
            }
        }
    }
    return { nGram: nGram, beginnings: beginnings }; // W Confirmed;
}
exports.toNgram = toNgram;
function fromNgram(nGram, beginnings) {
    // Grab a random starting word(s)
    var query = beginnings[Math.floor(Math.random() * beginnings.length)];
    var result = query + " ";
    // Keep looping until it runs out of NGram results
    var looper = true;
    while (looper) {
        var gram = nGram[query];
        if (!gram || !gram.length) {
            looper = false;
            break;
        }
        // Takes a random NGram result and slaps it in the string
        var nextBit = gram[Math.floor(Math.random() * gram.length)];
        result += nextBit.split(" ")[nextBit.split(" ").length - 1] + " ";
        query = nextBit;
    }
    return result; // Insane W acquired
}
exports.fromNgram = fromNgram;
