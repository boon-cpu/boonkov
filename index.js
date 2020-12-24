const toNgrams = (input, nOrder) => {
  if (nOrder > 5 || nOrder < 1)
    throw new Error("nOrder must be below 5 and above 1");
  const ngrams = {};
  const beginnings = [];
  input.forEach((sentence) => {
    const words = sentence.split(` `);
    let prompts = "";
    for (let i = 0; i < nOrder; i++) {
      prompts += words[i] + " ";
    }
    beginnings.push(prompts.slice(0, -1));
    words.forEach((word, idx) => {
      let ref = ``;
      for (let i = 0; i < nOrder; i++) {
        ref += `${words[idx + i]} `;
      }
      ref = ref.slice(0, ref.length - 1);

      let next = ``;
      for (let i = 0; i < nOrder; i++) {
        next += `${words[1 + idx + i]} `;
      }
      next = next.slice(0, next.length - 1);

      if (!ngrams[ref]) {
        ngrams[ref] = [next];
      } else {
        ngrams[ref].push(next);
      }
    });
  });
  return { ngrams: ngrams, beginnings: beginnings };
};

const fromNgrams = (ngrams, beginnings) => {
  const beginning = beginnings[~~(Math.random() * beginnings.length)];
  let currentGram = beginning;
  let next;
  let res = "";
  for (let i = 0; i < 50; i++) {
    next = ngrams[currentGram][~~(Math.random() * ngrams[currentGram].length)];
    currentGram = next;
    if (!ngrams[currentGram]) {
      break;
    }
    res += currentGram.split(" ")[0] + " ";
  }
  return beginning.split(" ")[0] + " " + res;
};

exports.toNgrams = toNgrams;
exports.fromNgrams = fromNgrams;
