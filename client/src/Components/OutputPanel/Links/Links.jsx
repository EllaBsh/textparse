import { Box, TextField, Typography } from '@mui/material';
import CopyText from '../../Buttons/CopyText/CopyText';
import sxStyles from './sxStyles';

const Links = () => {
    return (
        <Box sx={sxStyles.inputPanel}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '12rem',
                }}>
                <Typography sx={sxStyles.textboxTitle}>
                    Words Found in Text / Links
                </Typography>
                <TextField
                    rows={4}
                    multiline
                    disabled
                    sx={{
                        width: '100%',
                        '& .MuiInputBase-root': {
                            borderRadius: '.6rem',
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    <CopyText />
                </Box>
            </Box>
        </Box>
    );
};
export default Links;
