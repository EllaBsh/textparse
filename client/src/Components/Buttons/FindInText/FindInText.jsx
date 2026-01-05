import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import {
    findInText,
    highlightWordsInText,
} from '../../../utils/highlightUtils';
import sxStyles from './sxStyles';

const FindInText = ({
    unseenText,
    manualWords,
    activeWordLists,
    setHighlightedText,
    matches,
    setMatches,
    setWordsFound,
}) => {
    const getUniqueWords = () => {
        const wordsFound = new Set([]);
        for (const [wordList] of Object.values(matches)) {
            for (const word of wordList) {
                wordsFound.add(word);
            }
        }
        return [...wordsFound];
    };

    const handleClick = () => {
        const tempMatches = findInText(unseenText, activeWordLists);
        setMatches(tempMatches);
        setHighlightedText(highlightWordsInText(unseenText, tempMatches));
        setWordsFound(getUniqueWords());
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
