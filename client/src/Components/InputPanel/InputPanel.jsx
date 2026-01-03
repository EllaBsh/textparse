import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import sxStyles from './sxStyles';
import FindInText from '../Buttons/FindInText/FindInText';

const InputPanel = ({
    unseenText,
    setUnseenText,
    manualWords,
    setManualWords,
    activeWordLists,
    setHighlightedText,
    textValue,
    handleTextChange,
}) => {
    const [draftText, setDraftText] = useState('');

    useEffect(() => {
        setDraftText(textValue);
    }, [textValue]);

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
                    isInput={true}
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
                    value={draftText}
                    onChange={(event) => setDraftText(event.target.value)}
                    onBlur={() => {
                        handleTextChange(draftText);
                    }}
                    sx={sxStyles.wordListTextField}
                />
                <Box sx={sxStyles.buttonsContainer}>
                    <Box sx={sxStyles.actionButtonsContainer}>
                        <ClearText setText={setManualWords} />
                        <CopyText text={manualWords} />
                    </Box>
                    <FindInText
                        unseenText={unseenText}
                        manualWords={manualWords}
                        setHighlightedText={setHighlightedText}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
