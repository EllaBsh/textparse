import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import sxStyles from './sxStyles';
import Highlighter from 'react-highlight-words';
import { useState } from 'react';
import {
    findInText,
    highlightWordsInText,
} from '../../../utils/highlightUtils';

const FindInText = ({
    unseenText,
    manualWords,
    activeWordLists,
    setHighlightedText,
    matches,
    setMatches,
}) => {
    const handleClick = () => {
        const tempMatches = findInText(unseenText, activeWordLists);
        setMatches(tempMatches);
        setHighlightedText(
            highlightWordsInText(unseenText, tempMatches)
        );
    };

    return (
        <Button
            onClick={handleClick}
            sx={sxStyles.button}
            disableFocusRipple
            // disabled={
            //     !unseenText ||
            //     (manualWords === '' &&
            //         Object.keys(activeWordLists).length === 0)
            // }
        >
            <SearchIcon sx={sxStyles.icon} />
            Find Words
        </Button>
    );
};

export default FindInText;
