import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import { parseManual } from '../../utils/wordListUtils';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import FindInText from '../Buttons/FindInText/FindInText';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import sxStyles from './sxStyles';

const InputPanel = ({
    unseenText,
    setUnseenText,
    activeWordLists,
    setHighlightedText,
    wordListTextValue,
    setWordListTextValue,
    setActiveWordLists,
    matches,
    setMatches,
    setWordsFound,
    setLists,
}) => {
    const handleWordListTextChange = (event) => {
        const value = event.target.value;
        setWordListTextValue(value);

        const words = parseManual(value);

        if (words.length === 0) {
            setLists((prev) =>
                Object.fromEntries(
                    Object.entries(prev).map(([key, obj]) => [
                        key,
                        { ...obj, checked: false },
                    ])
                )
            );

            setActiveWordLists({ manual: [] });
            return;
        }

        setActiveWordLists((prev) => ({
            ...prev,
            manual: parseManual(event.target.value),
        }));

        setWordListTextValue(event.target.value);
    };

    return (
        <Box sx={sxStyles.inputPanel}>
            <Box sx={sxStyles.yourTextContainer}>
                <Box sx={sxStyles.yourTextTitleContainer}>
                    <Typography sx={sxStyles.componentTitle}>
                        Your Text
                    </Typography>
                    <Tooltip
                        arrow
                        title={
                            <Typography sx={sxStyles.tooltipText}>
                                Paste your text and word list to find and
                                highlight the words in the text
                            </Typography>
                        }>
                        <HelpOutlineOutlinedIcon sx={sxStyles.icon} />
                    </Tooltip>
                </Box>
                <UnseenTextField
                    unseenText={unseenText}
                    setUnseenText={setUnseenText}
                />
            </Box>
            <Box sx={sxStyles.wordListContainer}>
                <Box sx={sxStyles.wordListTitleContainer}>
                    <Typography sx={sxStyles.componentTitle}>
                        Word List
                    </Typography>
                </Box>
                <TextField
                    multiline
                    rows={5}
                    placeholder='Enter words separated by commas (e.g., Austen, Woolf, Christie)'
                    value={wordListTextValue}
                    onChange={(event) => handleWordListTextChange(event)}
                    sx={sxStyles.wordListTextField}
                />
                <Box sx={sxStyles.buttonsContainer}>
                    <Box sx={sxStyles.actionButtonsContainer}>
                        <ClearText
                            setText={setWordListTextValue}
                            setActiveWordLists={setActiveWordLists}
                            setLists={setLists}
                        />
                        <CopyText text={wordListTextValue} />
                    </Box>
                    <FindInText
                        unseenText={unseenText}
                        activeWordLists={activeWordLists}
                        setHighlightedText={setHighlightedText}
                        matches={matches}
                        setMatches={setMatches}
                        setWordsFound={setWordsFound}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
