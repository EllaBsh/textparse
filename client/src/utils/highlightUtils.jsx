import { renderToStaticMarkup } from 'react-dom/server';
import { LISTS_DATA } from './wordListUtils';

const sortWordList = (wordList) => {
    return [...wordList].sort((a, b) => {
        const aIsPhrase = a.includes(' ');
        const bIsPhrase = b.includes(' ');

        if (aIsPhrase === bIsPhrase) return 0;
        return aIsPhrase ? -1 : 1;
    });
};

export const findInText = (text, activeWordLists) => {
    const matches = {};
    const wordsFound = [];
    const updatedActiveLists = isolateManual(activeWordLists);

    for (const [listName, wordList] of Object.entries(updatedActiveLists)) {
        const sortedList = sortWordList(wordList);
        for (const word of sortedList) {
            const regex = new RegExp(`\\b(${word})\\b`, 'i');

            if (regex.test(text) && !wordsFound.includes(word)) {
                if (!matches[listName]) {
                    matches[listName] = [];
                }
                wordsFound.push(word);
                matches[listName].push(word);
            }
        }
    }
    return matches;
};

const isolateManual = (activeWordLists) => {
    // currently if user adds words manually and checks lists,
    // 'manual' in activeWordLists saves all active lists and manually added words in a string in an array
    // isolating the unique words in 'manual' lets us highlight differently the those words.
    const otherWords = Object.entries(activeWordLists)
        .filter(([key]) => key !== 'manual')
        .flatMap(([, words]) => words);

    const otherWordsSet = new Set(otherWords.map((w) => w.toLowerCase()));

    const newManual = (activeWordLists.manual || []).filter(
        (word) => !otherWordsSet.has(word.toLowerCase())
    );

    return {
        ...activeWordLists,
        manual: newManual,
    };
};

const highlightWord = (word, listName) => {
    return (
        <mark
            key={`${listName}-${word}`}
            style={{
                backgroundColor: LISTS_DATA[listName]?.color || '#ffd54f',
                padding: '0 .063rem',
                borderRadius: '.188rem',
            }}>
            {word}
        </mark>
    );
};

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const highlightWordsInText = (text, matches) => {
    const hits = [];

    for (const [listName, wordList] of Object.entries(matches)) {
        for (const word of wordList) {
            const escapedWord = escapeRegExp(word);

            const pattern = word.includes(' ')
                ? `(?<!\\w)${escapedWord}(?!\\w)`
                : `(?<!\\w)${escapedWord}(?!\\w)`;

            const regex = new RegExp(pattern, 'i');
            const match = regex.exec(text);

            if (match) {
                hits.push({
                    index: match.index,
                    word: match[0], // preserve original casing from text
                    listName,
                });
            }
        }
    }

    // sort by position in text
    hits.sort((a, b) => a.index - b.index);

    const result = [];
    let cursor = 0;

    for (const hit of hits) {
        // skip overlaps
        if (hit.index < cursor) continue;

        result.push(text.slice(cursor, hit.index));
        result.push(highlightWord(hit.word, hit.listName));
        cursor = hit.index + hit.word.length;
    }

    result.push(text.slice(cursor));
    return result;
};

export const highlightedToHtml = (highlightedContent) =>
    highlightedContent
        .map((part) =>
            typeof part === 'string' ? part : renderToStaticMarkup(part)
        )
        .join('');
