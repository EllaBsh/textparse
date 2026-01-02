import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import sxStyles from './sxStyles';

const InputPanel = () => {
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
                <UnseenTextField isInput={true} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '1.5rem',
                }}>
                <Box>
                    <Typography sx={sxStyles.componentTitle}>
                        Word List
                    </Typography>
                </Box>
                <TextField
                    placeholder='Enter words separated by commas (e.g., Austen, Woolf, Christie)'
                    sx={sxStyles.wordListTextField}
                />
                <Box sx={sxStyles.actionButtonsContainer}>
                    <ClearText />
                    <CopyText />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
