export function toNgrams(
  input: string[],
  nOrder: number
): { ngrams: Record<string, string[]>; beginnings: string[] };

export function fromNgrams(
  ngrams: Record<string, string[]>,
  beginnings: string[]
): string;
