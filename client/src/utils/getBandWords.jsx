import bandI from '../Assets/BandWords/bandI.txt';
import bandII from '../Assets/BandWords/bandII.txt';
import bandIII from '../Assets/BandWords/bandIII.txt';
import listA from '../Assets/BandWords/listA.txt';
import listB from '../Assets/BandWords/listB.txt';
import listC from '../Assets/BandWords/listC.txt';
import listD from '../Assets/BandWords/listD.txt';
import preBand from '../Assets/BandWords/preBand.txt';

export const WORD_FILES = {
    preBand,
    bandI,
    bandII,
    bandIII,
    listA,
    listB,
    listC,
    listD,
};
const parseWords = (text) =>
    text
        .split(/\r?\n/)
        .map((w) => w.trim().toLowerCase())
        .filter(Boolean);

const wordCache = {};

export const loadWordsFromUrl = async (url, listName) => {
    if (wordCache[listName]) {
        return wordCache[listName];
    }

    const res = await fetch(url);
    const text = await res.text();

    const words = parseWords(text);

    wordCache[listName] = words;

    return words;
};
