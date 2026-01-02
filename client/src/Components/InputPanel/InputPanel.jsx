import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import sxStyles from './sxStyles';

const InputPanel = ({ unseenText, setUnseenText, wordList, setWordList }) => {
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
                <Box>
                    <Typography sx={sxStyles.componentTitle}>
                        Word List
                    </Typography>
                </Box>
                <TextField
                    placeholder='Enter words separated by commas (e.g., Austen, Woolf, Christie)'
                    value={wordList}
                    onChange={(event) => setWordList(event.target.value)}
                    sx={sxStyles.wordListTextField}
                />
                <Box sx={sxStyles.actionButtonsContainer}>
                    <ClearText setText={setWordList} />
                    <CopyText text={wordList} />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
