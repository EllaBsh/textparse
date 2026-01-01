import { Box, TextField, Typography } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import Links from './Links/Links';
import Lists from './Lists/Lists';
import sxStyles from './sxStyles';

const OutputPanel = () => {
    return (
        <Box>
            <Box sx={sxStyles.inputPanel}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={sxStyles.textboxTitle}>
                        Highlighted Words in Text
                    </Typography>
                    <TextField
                        rows={8}
                        multiline
                        disabled
                        sx={{
                            width: '44vw',
                            '& .MuiInputBase-root': { borderRadius: '.6rem' },
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
            <Box
                sx={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Lists />
                <Links />
            </Box>
        </Box>
    );
};

export default OutputPanel;
