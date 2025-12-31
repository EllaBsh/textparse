import { Box, Icon, Typography } from '@mui/material';
import sxStyles from './sxStyles';
import InputPanel from '../InputPanel/InputPanel';
import SearchIcon from '@mui/icons-material/Search';

const AppWrapper = () => {
    return (
        <Box sx={sxStyles.wrapper}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Box sx={sxStyles.iconContainer}>
                        <SearchIcon sx={sxStyles.icon} />
                    </Box>
                    <Typography sx={sxStyles.title}>
                        Find Words in Text
                    </Typography>
                </Box>
                <Typography sx={sxStyles.subTitle}>
                    Paste your text and word list to find and highlight the
                    words in the text
                </Typography>
            </Box>
            <Box>
                <InputPanel />
            </Box>
        </Box>
    );
};

export default AppWrapper;
