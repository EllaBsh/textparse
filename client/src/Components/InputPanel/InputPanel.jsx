import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import sxStyles from './sxStyles';

const InputPanel = () => {
    return (
        <Box sx={sxStyles.inputPanel}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '.8rem',
                    }}>
                    <Typography sx={sxStyles.textboxTitle}>
                        Your Text
                    </Typography>
                    <Tooltip
                        arrow
                        title={
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontSize: '.8rem',
                                    textAlign: 'center',
                                }}>
                                Paste your text and word list to find and
                                highlight the words in the text
                            </Typography>
                        }>
                        <HelpOutlineOutlinedIcon
                            sx={{ fontSize: '1.2rem', color: '#8d939eff' }}
                        />
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
                    <Typography sx={sxStyles.textboxTitle}>
                        Word List
                    </Typography>
                </Box>
                <TextField
                    placeholder='Enter a word here...'
                    sx={{
                        width: '44vw',
                        '& .MuiInputBase-root': {
                            borderRadius: '.6rem',
                            height: '2.5rem',
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '14rem',
                        justifyContent: 'space-between',
                    }}>
                    <ClearText />
                    <CopyText />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
