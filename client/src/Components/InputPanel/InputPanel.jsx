import { Box, Button, TextField, Typography } from '@mui/material';
import sxStyles from './sxStyles';

const InputPanel = () => {
    return (
        <Box sx={sxStyles.inputPanel}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={sxStyles.textboxTitle}>Your Text</Typography>
                <TextField
                    rows={8}
                    multiline
                    placeholder='Paste your text here...'
                    sx={{
                        width: '45vw',
                        '& .MuiInputBase-root': { borderRadius: '.6rem' },
                    }}
                />
                <Button
                    sx={{
                        background: '#F2F3F6',
                        width: 'fit-content',
                        margin: '.5rem 0',
                        textTransform: 'none',
                        fontFamily: 'Inter',
                        color: '#586373ff',
                        padding: '.1rem 1rem',
                        border: '1px solid #d4d6d7ff',
                        '&:hover': {
                            background: '#e6e6e8ff',
                        },
                    }}
                    disableRipple
                    disableTouchRipple>
                    Clear Text
                </Button>
            </Box>
            <Button>dropzone</Button>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={sxStyles.textboxTitle}>Word List</Typography>
                <TextField
                    placeholder='Enter a word here...'
                    sx={{
                        width: '45vw',
                        '& .MuiInputBase-root': {
                            borderRadius: '.6rem',
                            height: '2.5rem',
                        },
                    }}
                />
                <Button>Load Lists</Button>
            </Box>
        </Box>
    );
};

export default InputPanel;
