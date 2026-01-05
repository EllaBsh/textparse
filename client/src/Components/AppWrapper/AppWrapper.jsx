import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import InputPanel from '../InputPanel/InputPanel';
import OutputPanel from '../OutputPanel/OutputPanel';
import sxStyles from './sxStyles';

const AppWrapper = () => {
    const [unseenText, setUnseenText] = useState('');
    const [wordListTextValue, setWordListTextValue] = useState('');
    const [activeWordLists, setActiveWordLists] = useState({
        manual: [],
    });
    const [highlightedText, setHighlightedText] = useState(null);
    const [matches, setMatches] = useState({});
    const [wordsFound, setWordsFound] = useState([]);
    const [lists, setLists] = useState({
        preBand: { checked: false },
        bandI: { checked: false },
        bandII: { checked: false },
        bandIII: { checked: false },
        listA: { checked: false },
        listB: { checked: false },
        listC: { checked: false },
        listD: { checked: false },
    });

    return (
        <Box sx={sxStyles.wrapper}>
            <Box sx={sxStyles.titleContainer}>
                <Box sx={sxStyles.iconContainer}>
                    <SearchIcon sx={sxStyles.icon} />
                </Box>
                <Typography sx={sxStyles.title}>Find Words in Text</Typography>
            </Box>
            <Box sx={sxStyles.panelsContainer}>
                <Box sx={sxStyles.inputPanelContainer}>
                    <InputPanel
                        unseenText={unseenText}
                        setUnseenText={setUnseenText}
                        activeWordLists={activeWordLists}
                        setHighlightedText={setHighlightedText}
                        wordListTextValue={wordListTextValue}
                        setWordListTextValue={setWordListTextValue}
                        setActiveWordLists={setActiveWordLists}
                        matches={matches}
                        setMatches={setMatches}
                        setWordsFound={setWordsFound}
                        setLists={setLists}
                    />
                </Box>
                <OutputPanel
                    highlightedText={highlightedText}
                    setActiveWordLists={setActiveWordLists}
                    wordsFound={wordsFound}
                    setWordListTextValue={setWordListTextValue}
                    lists={lists}
                    setLists={setLists}
                />
            </Box>
        </Box>
    );
};

export default AppWrapper;
