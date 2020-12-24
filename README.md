# Boonkov

Boonkov is a smart and easy-to-use Markov chain generator and compiler.

```js
const { toNgrams, fromNgrams } = require("boonkov");

// Sets up the lexicon to be used by the algorithm.
const { ngrams, beginnings } = toNgrams(
  [ "This is the example input string", "This is another example string" ],
  1
);

// This takes the results from the generator and utilises them.
const result = fromNgrams(ngrams, beginnings);

console.log(result);
```

### toNgrams

the `toNgrams` function takes three parameters:

- `input` A string containing the messages you want in your lexicon.
- `separator` Either a string or a RegExp detailing how to split verses.
- `nOrder` number 1-5 detailing how thorough the algorithm is, lower number for more chaos.

It returns an object containing `ngrams` and `beginnings`

### fromNgrams

the `fromNgrams` function takes two parameters:

- `ngrams` A Markov chain which you can generate using the `toNgrams` function.
- `beginnings` An array of words that start the algorithm which you can generate using the `toNgrams` function.

It returns a string that is your Markov generated text.