declare function toNgram(input: string[], nOrder: number): {
    nGram: Record<string, string[]>;
    beginnings: string[];
};
declare function fromNgram(nGram: Record<string, string[]>, beginnings: string[]): string;
