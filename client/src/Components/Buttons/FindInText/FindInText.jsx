import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import sxStyles from './sxStyles';

const FindInText = () => {
    return (
        <Box sx={sxStyles.container}>
            <Button sx={sxStyles.button}>
                <SearchIcon sx={sxStyles.icon} />
                Find Words
            </Button>
        </Box>
    );
};

export default FindInText;
