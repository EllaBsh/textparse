import { Box, Button, TextField, Typography } from '@mui/material';
import sxStyles from './sxStyles';
import ClearText from '../Buttons/ClearText/ClearText';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CopyText from '../Buttons/CopyText/CopyText';

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
                        width: '44vw',
                        '& .MuiInputBase-root': {
                            borderRadius: '.6rem',
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <ClearText />
                    <Button
                        sx={{
                            textTransform: 'none',
                            color: '#5113b5ff',
                            fontSize: '1rem',
                        }}>
                        <FileUploadOutlinedIcon sx={{ fontSize: '1.2rem' }} />
                        Upload Text File
                    </Button>
                </Box>
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
                    }}>
                    <ClearText />
                    <CopyText />
                </Box>
            </Box>
        </Box>
    );
};

export default InputPanel;
