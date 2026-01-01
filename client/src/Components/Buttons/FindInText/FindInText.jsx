import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import sxStyles from './sxStyles';

const FindInText = () => {
    return (
        <Box
            sx={sxStyles.container}>
            <Button
                sx={sxStyles.button}>
                <SearchIcon sx={{marginRight: '.4rem'}} />
                Find Words
            </Button>
        </Box>
    );
};

export default FindInText;
