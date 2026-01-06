import bandI from '../Assets/BandWords/bandI.txt';
import bandII from '../Assets/BandWords/bandII.txt';
import bandIII from '../Assets/BandWords/bandIII.txt';
import listA from '../Assets/BandWords/listA.txt';
import listB from '../Assets/BandWords/listB.txt';
import listC from '../Assets/BandWords/listC.txt';
import listD from '../Assets/BandWords/listD.txt';
import preBand from '../Assets/BandWords/preBand.txt';

export const LISTS_DATA = {
    preBand: { file: preBand, color: '#1976D2' },
    bandI: { file: bandI, color: '#FFA500' },
    bandII: { file: bandII, color: '#FFFF00' },
    bandIII: { file: bandIII, color: '#0ea00eff' },
    listA: { file: listA, color: '#ADD8E6' },
    listB: { file: listB, color: '#FF69B4' },
    listC: { file: listC, color: '#b701b7ff' },
    listD: { file: listD, color: '#FFC0CB' },
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

export const parseManual = (value) =>
    value
        .split(',')
        .map((w) => w.trim())
        .filter(Boolean);

export const activeListsToText = (activeWordLists) =>
    Object.entries(activeWordLists)
        .filter(([key]) => key !== 'manual')
        .flatMap(([, words]) => words)
        .join(', ');
