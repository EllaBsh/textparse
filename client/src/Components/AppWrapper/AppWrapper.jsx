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
    const [highlightedText, setHighlightedText] = useState('');
    const { textValue, handleTextChange } = useWordSegments({
        manualWords,
        setManualWords,
        activeWordLists,
        setactiveWordLists,
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
                        manualWords={manualWords}
                        setManualWords={setManualWords}
                        activeWordLists={activeWordLists}
                        setHighlightedText={setHighlightedText}
                        textValue={textValue}
                        handleTextChange={handleTextChange}
                    />
                </Box>
                <OutputPanel
                    highlightedText={highlightedText}
                    setHighlightedText={setHighlightedText}
                    activeWordLists={activeWordLists}
                    setactiveWordLists={setactiveWordLists}
                />
            </Box>
        </Box>
    );
};

export default AppWrapper;
