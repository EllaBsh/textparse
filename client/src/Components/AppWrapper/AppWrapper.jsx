import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useWordSegments } from '../../utils/useWordSegments';
import InputPanel from '../InputPanel/InputPanel';
import OutputPanel from '../OutputPanel/OutputPanel';
import sxStyles from './sxStyles';

const AppWrapper = () => {
    const [unseenText, setUnseenText] = useState('');
    const [manualWords, setManualWords] = useState('');
    const [activeWordLists, setactiveWordLists] = useState({});
    const [highlightedText, setHighlightedText] = useState(null);
    const { wordListTextValue, handleWordListTextChange } = useWordSegments({
        manualWords,
        setManualWords,
        activeWordLists,
        setactiveWordLists,
    });
    const [matches, setMatches] = useState({});
    const [wordsFound, setWordsFound] = useState([]);

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
                        manualWords={manualWords}
                        setManualWords={setManualWords}
                        activeWordLists={activeWordLists}
                        setHighlightedText={setHighlightedText}
                        wordListTextValue={wordListTextValue}
                        handleWordListTextChange={handleWordListTextChange}
                        matches={matches}
                        setMatches={setMatches}
                        setWordsFound={setWordsFound}
                    />
                </Box>
                <OutputPanel
                    highlightedText={highlightedText}
                    activeWordLists={activeWordLists}
                    setactiveWordLists={setactiveWordLists}
                    matches={matches}
                    wordsFound={wordsFound}
                />
            </Box>
        </Box>
    );
};

export default AppWrapper;
