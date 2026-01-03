import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import sxStyles from './sxStyles';
import Highlighter from 'react-highlight-words';

const FindInText = ({ unseenText, manualWords, setHighlightedText }) => {
    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const getWordsToHighlight = () => {
        if (!unseenText || !manualWords) return [];

        const words = manualWords
            .split(',')
            .map((w) => w.trim())
            .filter(Boolean);

        const found = new Set();
        const lowerText = unseenText.toLowerCase();

        words.forEach((word) => {
            const regex = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i');
            if (regex.test(lowerText)) {
                found.add(word);
            }
        });

        return Array.from(found);
    };

    const handleClick = () => {
        const wordsToHighlight = getWordsToHighlight();
        return (
            <Highlighter
                highlightClassName='YourHighlightClass'
                searchWords={wordsToHighlight}
                autoEscape={true}
                textToHighlight={unseenText}
            />
        );
    };

    return (
        <Button onClick={handleClick} sx={sxStyles.button} disableFocusRipple>
            <SearchIcon sx={sxStyles.icon} />
            Find Words
        </Button>
    );
};

export default FindInText;
