# Boonkov

Boonkov is a smart and easy-to-use Markov chain generator and compiler.

```js
const { toNgram, fromNgram } = require("boonkov");

const sentences = [
  "This is the example input string",
  "This is another example string",
];
const nOrder = 1;

// Sets up the N-Gram to be used by the algorithm.
const { nGram, beginnings } = toNgram(sentences, nOrder);

// This takes the results from the generator and utilises them.
const result = fromNgram(nGram, beginnings);

console.log(result);
```

### toNgram

The `toNgram` function takes two parameters:

- `input` An array containing the strings you want to make up your lexicon.
- `nOrder` number above 0 describing the depth of the algorithm. (Lower number for wackier generations)

It returns an object containing an `nGram` object with your N-Gram in and an array `beginnings` full of sentence starters.

### fromNgram

the `fromNgram` function takes two parameters:

- `nGram` A Markov chain N-Gram which you can generate using the `toNgram` function.
- `beginnings` An array of words that start the algorithm which you can generate using the `toNgram` function.

It returns a string that is your Markov generated text.
