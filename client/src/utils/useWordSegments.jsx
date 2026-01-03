import { useCallback, useMemo } from 'react';

export const useWordSegments = ({
    manualWords,
    setManualWords,
    activeWordLists,
    setactiveWordLists,
}) => {
    const segments = useMemo(() => {
        const listSegments = Object.keys(activeWordLists)
            .sort()
            .map((key) => ({
                source: key,
                text: activeWordLists[key].join(', '),
            }));

        return [...listSegments, { source: 'manual', text: manualWords }];
    }, [manualWords, activeWordLists]);

    const textValue = useMemo(() => {
        const listText = Object.values(activeWordLists)
            .map((words) => words.join(', '))
            .filter(Boolean)
            .join(', ');

        return [manualWords, listText].filter(Boolean).join(', ');
    }, [manualWords, activeWordLists]);

    const handleTextChange = useCallback(
        (value) => {
            const parts = value.split('\n');

            let nextManual = manualWords;
            const nextLists = {};

            parts.forEach((text, index) => {
                const segment = segments[index];
                if (!segment) return;

                if (segment.source === 'manual') {
                    nextManual = text;
                } else {
                    nextLists[segment.source] = text
                        .split(/[\n]+/)
                        .map((w) => w.trim())
                        .filter(Boolean);
                }
            });

            setManualWords(nextManual);
            setactiveWordLists(nextLists);
        },
        [segments, manualWords, setManualWords, setactiveWordLists]
    );

    return {
        textValue,
        handleTextChange,
    };
};
