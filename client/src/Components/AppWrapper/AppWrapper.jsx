import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import FindInText from '../Buttons/FindInText/FindInText';
import InputPanel from '../InputPanel/InputPanel';
import OutputPanel from '../OutputPanel/OutputPanel';
import sxStyles from './sxStyles';

const AppWrapper = () => {
    return (
        <Box sx={sxStyles.wrapper}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '1rem',
                    }}>
                    <Box sx={sxStyles.iconContainer}>
                        <SearchIcon sx={sxStyles.icon} />
                    </Box>
                    <Typography sx={sxStyles.title}>
                        Find Words in Text
                    </Typography>
                </Box>
                {/* <Typography sx={sxStyles.subTitle}>
                    Paste your text and word list to find and highlight the
                    words in the text
                </Typography> */}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <InputPanel />
                    <FindInText />
                </Box>
                <OutputPanel />
            </Box>
        </Box>
    );
};

export default AppWrapper;
